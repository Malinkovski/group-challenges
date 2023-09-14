import React from "react";
import products from "../data/products";

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Unit</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
        {products.map(({ id, name, description, unit, ingredients }, index) => (
  <tr key={id}>
    <td>{id}</td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{unit}</td>
    <td>
      <ul>
        {ingredients.map(({ name, amount, unit }, index) => (
          <li key={index}>
            {name}: {amount} {unit}
          </li>
        ))}
      </ul>
    </td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
}

export default Products;
