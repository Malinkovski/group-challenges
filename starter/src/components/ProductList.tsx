import React from "react";
import ProductComp from "./Product";
import { Product } from "../assets/data/list";

interface ProductListProps {
  products: Product[];
  onToggleSelect: (id: number) => void;
}

const ProductList = ({ products, onToggleSelect }: ProductListProps) => {
  return (
    <div className="container product-list">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductComp product={product} onToggleSelect={onToggleSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
