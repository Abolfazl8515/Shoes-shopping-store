import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../../context/CartProvider";

const Cart = () => {
  const { products, total } = useCart();
  const dispatch = useCartActions();

  const deleteHandler = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  if (products.length === 0) {
    return (
      <>
        <h2 className="text-xl">Your cart is empty!</h2>
        <Link to="/products" className="mt-3 text-cyan-600">
          Go to shopping?
        </Link>
      </>
    );
  }
  return (
    <div className="md:w-3/4 w-5/6 mx-auto flex flex-col">
      <div className="text-left">
        <h2 className="text-4xl font-bold">Your Cart</h2>
      </div>
      <div className="w-full md:flex md:justify-between">
        <div className="flex flex-col md:w-2/3 w-full">
          {products.map((p) => {
            return (
              <div
                className="my-5 flex justify-between flex-wrap w-full border-b border-b-cyan-700 border-solid"
                key={p.id}
              >
                <div className="flex items-center">
                  <img
                    src={p.src}
                    alt="Products image"
                    width="120"
                    height="120"
                    className="rounded-xl"
                  />
                  <h3 className="ml-4 font-bold text-lg">{p.title}</h3>
                </div>
                <div className="flex items-center mx-5">
                  <p className="mr-5">${p.price}</p>
                  <button
                    type="button"
                    className="text-red-400"
                    onClick={() => deleteHandler(p)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-left md:w-1/4 w-full">
          <p>Total: ${total}</p>
          <button
            type="button"
            className="w-full text-white bg-cyan-600 rounded-lg text-center"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
