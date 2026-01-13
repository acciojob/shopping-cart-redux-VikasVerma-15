import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="custom-card">
          <div className="card-body">
            <h4>{item.name}</h4>

            <button onClick={() => dispatch(removeFromWishlist(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
