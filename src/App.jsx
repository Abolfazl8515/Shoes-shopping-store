import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import ProductList from "./components/ProductList/ProductList";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <div className="App">
      <Layout>
        {/* <HomePage /> */}
        {/* <SignUp /> */}
        {/* <CartPage /> */}
        <Login />
        {/* <ProductList /> */}
      </Layout>
    </div>
  );
};

export default App;
