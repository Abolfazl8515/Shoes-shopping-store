import Layout from "../../layout/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-3/4 md:w-5/6 w-full flex flex-col items-center">
          <form className="w-full flex flex-col py-4">
            <div className="py-4">
              <h3>Sign Up</h3>
            </div>
            <div className="md:w-1/2 w-5/6 my-2 md:flex md:justify-between md:items-center text-left mx-auto">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                className="md:w-1/2 w-full p-1 bg-transparent border-b border-b-black focus:outline-none "
              />
            </div>
            <div className="md:w-1/2 w-5/6 my-2 md:flex md:justify-between md:items-center text-left mx-auto">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                className="md:w-1/2 w-full p-1 bg-transparent border-b border-b-black focus:outline-none "
              />
            </div>
            <div className="md:w-1/2 w-5/6 my-2 md:flex md:justify-between md:items-center text-left mx-auto">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                className="md:w-1/2 w-full p-1 bg-transparent border-b border-b-black focus:outline-none "
              />
            </div>
            <div className="md:w-1/2 w-5/6 my-2 md:flex md:justify-between md:items-center text-left mx-auto">
              <label htmlFor="passwordConfirm">Password Confirmation</label>
              <input
                placeholder="Password Confirmation"
                className="md:w-1/2 w-full p-1 bg-transparent border-b border-b-black focus:outline-none "
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
              />
            </div>
            <div className="my-4">
              <button
                type="submit"
                className="md:w-1/2 w-5/6 h-8 bg-blue-400 text-white rounded-lg"
              >
                Submit
              </button>
              <p>Login into existing account</p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
