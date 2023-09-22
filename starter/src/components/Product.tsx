import React from "react";
import { Product } from "../assets/data/list";

interface ProductProps {
  product: Product;
  onToggleSelect: (id: number) => void;
}

const ProductComp = ({ product, onToggleSelect }: ProductProps) => {
  return (
    <div
      className={`product ${product.selected ? "product-selected" : ""}`}
      onClick={() => onToggleSelect(product.id)}
    >
      <img src={`../assets/images/${product.img}`} alt={product.name} />
      <h2>{product.name}</h2>
      <span>
        {product.price} {product.text}.
      </span>
    </div>
  );
};

export default ProductComp;
