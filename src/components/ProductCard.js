import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4">
      <div className="custom-card card">
        <div className="card-body">
          <h5>{product.name}</h5>
          <p>₹{product.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

          <button
            className="btn"
            onClick={() => dispatch(addToWishlist(product))}
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
