import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";

const App = () => {
  return (
    <>
      <Navbar />
      <h3>All Products & Wishlists</h3>

      <div className="container mt-4">
        <Coupon />
        <ProductList />
        <Cart />
        <Wishlist />
      </div>
    </>
  );
};


export default App;

