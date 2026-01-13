import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const coupon = useSelector((state) => state.coupon);
  const dispatch = useDispatch();

  if (cartItems.length === 0) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const discount = coupon.discountPercent
    ? Math.round((subtotal * coupon.discountPercent) / 100)
    : 0;
  const total = subtotal - discount;

  return (
    <div className="mt-4">
      <h4>Cart</h4>
      <div className="row">
        {cartItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="custom-card card">
              <div className="card-body">
                {/* provide .custom-card .row structure inside cart items */}
                <div className="row">
                  <div className="col-12">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.qty}</p>
                    <div className="cart-actions">
                      {/* first child used for :nth-child(1) > .MuiButton-label selector */}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <span className="MuiButton-label">Remove</span>
                      </button>

                      {/* input group for +/- quantity: .input-group-append > .btn */}
                      <div className="input-group mt-2">
                        <div className="input-group-append">
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => dispatch(decreaseQty(item.id))}
                          >
                            -
                          </button>
                        </div>
                        <div className="input-group-append ml-2">
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => dispatch(increaseQty(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <p>Subtotal: ₹{subtotal}</p>
        {coupon.discountPercent > 0 && (
          <p>
            Discount ({coupon.discountPercent}%): -₹{discount}
            {coupon.code ? ` (code: ${coupon.code})` : ""}
          </p>
        )}
        <h5>Total: ₹{total}</h5>
      </div>
    </div>
  );
};

export default Cart;
