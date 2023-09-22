import React from "react";
import { Product } from "../assets/data/list";
import Button from "./Button";

interface BasketItemProps {
  product: Product;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
}

const BasketItem = ({ product, addItem, removeItem }: BasketItemProps) => {
  const handleRemoveItemButton = () => {
    removeItem(product.id);
  };

  const handleAddItemButton = () => {
    addItem(product.id);
  };

  return (
    <li className="list-group-item">
      <div className="basket-item">
        <img src={`../assets/images/${product.img}`} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>Price: {product.price * product.amount} {product.text}.</p>
          <p>Amount: {product.amount}</p>
        </div>
        <div className="buttons">
          <Button
            className="btn-danger"
            onClick={handleRemoveItemButton}
            text="-"
          />
          <Button
            className="btn-success"
            onClick={handleAddItemButton}
            text="+"
          />
        </div>
      </div>
    </li>
  );
};

export default BasketItem;
