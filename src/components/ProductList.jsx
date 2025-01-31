import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

// Sample Products Data
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Headphones", price: 199 },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {product.name} - ${product.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
