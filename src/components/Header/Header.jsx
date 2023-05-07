const Header = () => {
  return (
    <header className="h-auto flex flex-col text-center">
      <nav className="h-16 flex justify-around items-center mb-4 bg-white">
        <ul className="md:flex sm:w-auto md:justify-between md:list-none hidden">
          <li className="bg-cyan-600 w-32 h-11 rounded-xl cursor-pointer text-white flex items-center justify-center lg:mx-10 hover:bg-cyan-600 transition-all">
            Home
          </li>
          <li className="lg:mx-10 w-32 h-11 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all rounded-xl">
            Products
          </li>
          <li className="lg:mx-10 w-32 h-11 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all rounded-xl">
            Login
          </li>
        </ul>
        <div className="flex justify-around items-center">
          <button className="lg:mx-10 h-11 flex items-center justify-center">
            Cart
          </button>
          <img src="src/assets/Images/logo.svg" alt="logo" className="w-28" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
