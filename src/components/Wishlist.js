import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlist.length === 0) return null;

  return (
    <div className="mt-4">
      <h3>Wishlists</h3>

      <div className="row">
        {wishlist.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="custom-card card">
              <div className="card-body">
                <h4>{item.name}</h4>

                {/* MUST be a single direct .btn */}
                <button
                  className="btn"
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
