import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import { Product } from "./assets/data/list";
import productList from "./assets/data/list";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState<Product[]>(productList);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const toggleSelect = (id: number) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id) {
          return { ...product, selected: !product.selected };
        } else {
          return product;
        }
      })
    );

    setSelectedProducts((prevSelected) => {
    const foundProduct = prevSelected.find((product) => product.id === id);
      if (foundProduct) {
        return prevSelected.filter((product) => product.id !== id);
      } else{
        return [...prevSelected, productList.find((product) => product.id === id)!];
      }
    });
  };

  const addItem = (id: number) => {
    setSelectedProducts((items) =>
      items.map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount + 1 };
        } else {
          return product;
        }
      })
    );
  };

  const removeItem = (id: number) => {
    setSelectedProducts((items) => {
      const basketProducts = items.map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount - 1};
        } else {
          return product;
        }
      });

      return basketProducts.filter((product) => product.amount !== 0);
    });
  };

  const placeOrder = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, selected: false }))
    );
    setSelectedProducts([]);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/basket">
          <Basket
            selectedProducts={selectedProducts}
            addItem={addItem}
            removeItem={removeItem}
            placeOrder={placeOrder}
          />
        </Route>
        <Route path="/">
          <ProductList products={products} onToggleSelect={toggleSelect} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
