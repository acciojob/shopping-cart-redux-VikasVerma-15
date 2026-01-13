import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Wishlist</h4>
      {items.map((item) => (
        <div key={item.id} className="custom-card card">
          <div className="card-body">
            <p>{item.name}</p>
            <button
              className="btn"
              onClick={() => dispatch(removeFromWishlist(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
