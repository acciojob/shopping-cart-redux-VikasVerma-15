import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlist.length === 0) return null;

  return (
    <div className="mt-4">
      <h4>Wishlist</h4>
      <div className="row">
        {wishlist.map((item, idx) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="custom-card card">
              <div className="card-body">
                <h4>{item.name}</h4>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
