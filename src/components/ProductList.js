import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

const dummyProducts = [
  { id: 1, name: "Mobile A", price: 10000 },
  { id: 2, name: "Mobile B", price: 15000 },
  { id: 3, name: "Mobile C", price: 20000 },
  { id: 4, name: "Mobile D", price: 25000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      {dummyProducts.map((product, idx) => (
        <div key={product.id} className="col-md-3 mb-3">
          <div className="custom-card card">
            <div className="card-body">
              <h4>{product.name}</h4>
              <p>Price: ₹{product.price}</p>
              {/* Add to cart button */}
              <button
                className="btn btn-primary btn-sm mr-1"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
              {/* Add to wishlist button */}
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => dispatch(addToWishlist(product))}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
