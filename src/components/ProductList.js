import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id}>
          {/* keep each product as a direct child so :nth-child selectors work */}
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

