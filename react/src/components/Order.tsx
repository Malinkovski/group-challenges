import React, { useState } from "react";
import products, { Product } from "../data/products";

function Order() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [orderArray, setOrderArray] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  const handleOnProductChange = (event: any) => {
    setSelectedProduct(
      products.find((product) => product.id === +event.target.value)
    );
  };

  const handleOnAmountChange = (event: any) => {
    if (selectedProduct) {
      setSelectedProduct({ ...selectedProduct, amount: +event.target.value });
    }
  };

  const handleOnAddItem = () => {
    if (selectedProduct) {
      setOrderArray([...orderArray, selectedProduct]);
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <button onClick={() => setShowModal(true)}>Generate order</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Unit</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderArray.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.unit}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <select onChange={handleOnProductChange}>
                <option value="--">Select value</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </td>
            <td>{selectedProduct?.description}</td>
            <td>{selectedProduct ? selectedProduct.unit : null}</td>
            <td>
              <input name="amount" onChange={handleOnAmountChange} />
            </td>
            <td>
              <button onClick={handleOnAddItem}>Add item</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Modal component pass props for showModal, orderArray and callback function to change showModal(false) visibility*/}
      <div></div>
    </div>
  );
}

export default Order;
