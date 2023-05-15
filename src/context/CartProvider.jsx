import { createContext, useReducer, useContext, useEffect } from "react";

const cartContext = createContext();
const cartContextDispatcher = createContext();

const initialState = JSON.parse(localStorage.getItem("Cart")) || {
  products: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const products = [...state.products];
      const index = products.findIndex((p) => p.id === action.payload.id);
      if (index < 0) {
        products.push(action.payload);
      } else {
        return state;
      }
      return { ...state, products, total: state.total + action.payload.price };
    }
    case "DELETE_FROM_CART": {
      const products = [...state.products];
      const filtredProducts = products.filter(
        (p) => p.id !== action.payload.id
      );
      return {
        ...state,
        products: filtredProducts,
        total: state.total - action.payload.price,
      };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <cartContext.Provider value={cart}>
      <cartContextDispatcher.Provider value={setCart}>
        {children}
      </cartContextDispatcher.Provider>
    </cartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(cartContext);
export const useCartActions = () => useContext(cartContextDispatcher);
