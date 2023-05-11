import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-auto flex flex-col text-center sticky top-0">
      <nav className="h-16 flex justify-around items-center mb-4 bg-white">
        <ul className="md:flex sm:w-auto md:justify-between md:list-none hidden">
          <li className="bg-cyan-600 w-32 h-11 rounded-xl cursor-pointer text-white flex items-center justify-center lg:mx-10 hover:bg-cyan-600 transition-all">
            <Link to="/" className="w-full">
              Home
            </Link>
          </li>
          <li className="lg:mx-10 w-32 h-11 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all rounded-xl">
            <Link to="/products" className="w-full">
              Products
            </Link>
          </li>
          <li className="lg:mx-10 w-32 h-11 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all rounded-xl">
            <Link to="/login" className="w-full">
              Login
            </Link>
          </li>
        </ul>
        <div className="flex justify-around items-center">
          <Link to="/cart" className="w-full relative">
            <span className="w-5 h-5 rounded-full text-white flex items-center justify-center bg-red-500 absolute left-4 bottom-4">
              0
            </span>
            <img
              src="src/assets/Images/cart.png"
              width="30"
              height="30"
              alt="cart"
              className="mr-2"
            />
          </Link>
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
