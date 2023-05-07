const LoginSignUp = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-3/4 flex flex-col items-center">
        <form className="w-full flex flex-col py-4">
          <div className="py-4">
            <h3>Sign Up</h3>
          </div>
          <div className="w-1/2 my-2 flex justify-between items-center mx-auto">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              className="w-1/2 p-1 bg-transparent border-b border-b-black focus:outline-none "
            />
          </div>
          <div className="w-1/2 my-2 flex justify-between items-center mx-auto">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              className="w-1/2 p-1 bg-transparent border-b border-b-black focus:outline-none "
            />
          </div>
          <div className="w-1/2 my-2 flex justify-between items-center mx-auto">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              className="w-1/2 p-1 bg-transparent border-b border-b-black focus:outline-none "
            />
          </div>
          <div className="w-1/2 my-2 flex justify-between items-center mx-auto">
            <label htmlFor="passwordConfirm">Password Confirmation</label>
            <input
              placeholder="Password Confirmation"
              className="w-1/2 p-1 bg-transparent border-b border-b-black focus:outline-none "
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
            />
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="w-1/2 h-8 bg-blue-400 text-white rounded-lg"
            >
              Submit
            </button>
            <p>Login into existing account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
