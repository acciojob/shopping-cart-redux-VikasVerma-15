import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) return null;

  return (
    <div className="mt-4">
      <h4>Cart</h4>
      {/* Using row/col like product list */}
      <div className="row">
        {cartItems.map((item, idx) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="custom-card card">
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>Qty: {item.qty}</p>
                <div>
                  <button
                    className="btn btn-secondary btn-sm mr-1"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-secondary btn-sm mr-1"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
