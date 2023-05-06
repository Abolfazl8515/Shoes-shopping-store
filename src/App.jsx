import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <ProductList />
      </Layout>
    </div>
  );
};

export default App;
