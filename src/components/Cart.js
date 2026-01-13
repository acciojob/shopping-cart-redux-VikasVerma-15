import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const { discount } = useSelector((state) => state.coupon);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const finalTotal = total - discount;

  return (
    <div>
      <h4>Cart</h4>
      {items.map((item) => (
        <div key={item.id} className="custom-card card">
          <div className="card-body">
            <p>{item.name}</p>
            <p>Qty: {item.qty}</p>

            <button
              className="btn"
              onClick={() => dispatch(increaseQty(item.id))}
            >
              +
            </button>

            <button
              className="btn"
              onClick={() => dispatch(decreaseQty(item.id))}
            >
              -
            </button>

            <button
              className="btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h5>Total: ₹{finalTotal}</h5>
    </div>
  );
};

export default Cart;
