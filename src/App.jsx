import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import CartProvider from "./context/CartProvider";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </div>
  );
};

export default App;
