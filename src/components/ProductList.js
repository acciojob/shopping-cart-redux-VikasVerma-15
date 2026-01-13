import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Black Chino Pants", price: 1500 },
  { id: 2, name: "Blue Denim Jeans", price: 2000 },
  { id: 3, name: "White Casual Shirt", price: 1200 },
  { id: 4, name: "Running Shoes", price: 3000 },
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

