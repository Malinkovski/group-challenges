import React from "react";
import { Product } from "../assets/data/list";
import BasketItem from "./BasketItem";
import Button from "./Button";

interface BasketProps {
  selectedProducts: Product[];
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  placeOrder: () => void;
}

const Basket = ({
  selectedProducts,
  addItem,
  removeItem,
  placeOrder,
}: BasketProps) => {
  const handlePlaceOrder = () => {
    placeOrder();
  };

  return (
    <div className="container basket">
      <h2>PRODUCTS</h2>
      <ul className="list-group">
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <BasketItem
              key={product.id}
              product={product}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))
        ) : (
          <li className="list-group-item">
            <h5>No items in basket.</h5>
          </li>
        )}
      </ul>
      <Button
        className="btn-primary"
        onClick={handlePlaceOrder}
        text="Place order"
      />
    </div>
  );
};

export default Basket;
