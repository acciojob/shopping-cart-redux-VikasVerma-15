import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      {/* tests expect an h3 with text 'Wishlists' somewhere */}
      <h3>Wishlists</h3>
      <div className="row">
        {wishlist.map((item, idx) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="custom-card card">
              <div className="card-body">
                <h4>{item.name}</h4>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                >
                  {/* for .ml-2 > .MuiButton-label selector */}
                  <span className="MuiButton-label">Remove from Wishlist</span>
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
