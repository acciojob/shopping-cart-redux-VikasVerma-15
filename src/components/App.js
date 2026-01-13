import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const App = () => {
  return (
    <div>
      <h3>Shopping Cart</h3>

      <ProductList />
      <Cart />
      <Wishlist />
    </div>
  );
};

export default App;
