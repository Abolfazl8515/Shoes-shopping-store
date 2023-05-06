const ProductList = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <h2 className="text-5xl border-b-2 border-b-cyan-500 rounded-b-md">
        Our Products
      </h2>
      <section className="flex justify-center w-4/5 mt-10 bg-cyan-600 p-4 rounded-lg">
        <div className="w-full flex justify-center flex-wrap">
          <div className="flex flex-col rounded-lg w-64 m-2 bg-white">
            <div className="w-full">
              <img
                src="src/assets/Images/Shoes.png"
                alt="Product image"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="flex justify-between px-3">
              <h3 className="border border-cyan-600 border-solid px-2 py-1 rounded-lg">
                Adidas
              </h3>
              <p className="border border-cyan-600 border-solid px-2 py-1 rounded-lg">
                $139
              </p>
            </div>
            <div className="my-4 w-full flex justify-center">
              <button
                type="button"
                className="w-4/5 h-8 text-white bg-cyan-600 rounded-lg"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductList;