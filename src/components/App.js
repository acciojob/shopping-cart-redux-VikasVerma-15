import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const App = () => {
  return (
    <div>
      {/* #root > :nth-child(1) */}
      <Navbar />

      {/* #root > :nth-child(2) */}
      <div className="container mt-4">
        {/* :nth-child(1) inside container → h3 */}
        <div>
          <h3>Shopping Cart</h3>
        </div>

        {/* :nth-child(2) inside container → wrapper that directly has .row */}
        <div>
          <div className="row">
            <ProductList />
          </div>
        </div>

        <Cart />
        <Wishlist />
      </div>
    </div>
  );
};

export default App;

