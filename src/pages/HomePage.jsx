import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <>
      <section className="lg:flex lg:items-center text-center w-full lg:justify-around">
        <div className="lg:w-2/5 w-full lg:flex lg:justify-center">
          <h1 className="sm:text-7xl text-4xl font-bold lg:w-0">
            Abolfazl Shopping
          </h1>
        </div>
        <div className="lg:w-2/4 w-full flex items-center justify-center">
          <img
            src="src/assets/Images/Shoes.png"
            alt="Shoes header"
            className="sm:w-96 w-full"
          />
        </div>
      </section>
      <ProductList />
    </>
  );
};

export default HomePage;
