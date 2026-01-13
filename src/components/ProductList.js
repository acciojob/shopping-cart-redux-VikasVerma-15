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
      {/* tests look for #root > :nth-child(2) > :nth-child(2) > .row */}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3">
            {/* each column is an :nth-child(n) that directly contains .custom-card */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

