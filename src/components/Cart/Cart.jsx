const Cart = () => {
  return (
    <div className="md:w-3/4 w-5/6 mx-auto flex flex-col">
      <div className="text-left">
        <h2 className="text-4xl font-bold">Your Cart</h2>
      </div>
      <div className="w-full md:flex md:justify-between">
        <div className="flex flex-col md:w-2/3 w-full">
          <div className="my-5 flex justify-between flex-wrap w-full border-b border-b-cyan-700 border-solid">
            <div className="flex items-center">
              <img
                src="src/assets/Images/Shoes.png"
                alt="Products image"
                width="120"
                height="120"
                className="rounded-xl"
              />
              <h3 className="ml-4 font-bold text-lg">Adidas Shoes</h3>
            </div>
            <div className="flex items-center mx-5">
              <p className="mr-5">$113</p>
              <button type="button" className="text-red-400">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="text-left md:w-1/4 w-full">
          <p>Total: $113</p>
          <p>Off price : - $12</p>
          <p>Your pay price : $101</p>
          <button type="button">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
