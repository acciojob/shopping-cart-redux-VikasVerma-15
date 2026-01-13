import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <ProductList />
        <Coupon />
        <Cart />
        <Wishlist />
      </div>
    </div>
  );
};

export default App;
