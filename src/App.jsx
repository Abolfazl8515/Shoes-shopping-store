import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import ProductList from "./components/ProductList/ProductList";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login";
import CartPage from "./pages/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Signup from "./components/SignUp/SignUp";
import CartProvider from "./context/CartProvider";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </div>
  );
};

export default App;
