import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        {/* Simple one-page layout: products, cart, wishlist */}
        <ProductList />
        <Cart />
        <Wishlist />
      </div>
    </div>
  );
}

export default App;
