import React, { useState } from "react";
import ProductList from "./components/Products";

function App() {
  const [show, setShow] = useState("products");

  const handleToProducts = () => {
    setShow("products");
  };

  const handleOrder = () => {
    setShow("order");
  };

  return (
    <div className="container">
      <h1>Place an Order</h1>
      <div className="btn-group">
        <button
          className={`btn ${show === "products" ? "btn-primary" : "btn-secondary"}`}
          onClick={handleToProducts}
        >
          Products
        </button>
        <button
          className={`btn ${show === "order" ? "btn-primary" : "btn-secondary"}`}
          onClick={handleOrder}
        >
          Order
        </button>
      </div>
      <ProductList />
    </div>
  );
}

export default App;
