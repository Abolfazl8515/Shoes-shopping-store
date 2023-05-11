import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import ProductList from "./components/ProductList/ProductList";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login";
import CartPage from "./pages/CartPage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
