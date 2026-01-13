import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="custom-card">
      <div className="card-body">
        <h4>{product.name}</h4>
        <p>{product.price}</p>

        {/* FIRST BUTTON */}
        <button
          className="btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

        {/* SECOND BUTTON */}
        <button
          className="btn"
          onClick={() => dispatch(addToWishlist(product))}
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
