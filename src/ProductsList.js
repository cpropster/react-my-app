import React from "react";
import "./App.css";
import data from "./data.js";

const { products } = data;

const ProductsList = () => {
  return (
    <div className="ProductsList">
      <h1>Products List</h1>
      <ul>
        {data.products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
