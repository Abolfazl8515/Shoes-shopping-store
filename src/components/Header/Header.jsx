import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartProvider";

const Header = () => {
  const { products } = useCart();
  return (
    <header className="h-auto flex flex-col text-center sticky top-0">
      <nav className="h-16 flex justify-around items-center mb-4 bg-white">
        <ul className="md:flex sm:w-auto md:justify-between md:list-none hidden">
          <li className="w-32 h-11 rounded-xl cursor-pointer flex items-center justify-center lg:mx-10 hover:bg-cyan-600 hover:text-white transition-all">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive
                  ? "w-full h-full flex justify-center items-center rounded-xl bg-cyan-600 text-white"
                  : "w-full"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="lg:mx-10 w-32 h-11 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all rounded-xl">
            <NavLink
              to="/products"
              className={(navData) =>
                navData.isActive
                  ? "w-full h-full flex justify-center items-center rounded-xl bg-cyan-600 text-white"
                  : "w-full"
              }
            >
              Products
            </NavLink>
          </li>
          <li className="lg:mx-10 w-32 h-11 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all rounded-xl">
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive
                  ? "w-full h-full flex justify-center items-center rounded-xl bg-cyan-600 text-white"
                  : "w-full"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-around items-center">
          <NavLink to="/cart" className="w-full relative">
            <span className="w-5 h-5 rounded-full text-white flex items-center justify-center bg-red-500 absolute left-4 bottom-4">
              {products.length}
            </span>
            <img
              src="src/assets/Images/cart.png"
              width="30"
              height="30"
              alt="cart"
              className="mr-2"
            />
          </NavLink>
          <img
            src="src/assets/Images/logo.svg"
            alt="logo"
            className="w-28 h-16"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
