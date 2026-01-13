import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
];

const ProductList = () => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

