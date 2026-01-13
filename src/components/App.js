import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <ProductList />
        <Cart />
        <Wishlist />
      </div>
    </>
  );
};

export default App;

