import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="custom-card">
          <div className="card-body">
            <h4>{item.name}</h4>
            <p>{item.qty}</p>

            {/* ONLY ONE + BUTTON */}
            <button onClick={() => dispatch(increaseQty(item.id))}>
              +
            </button>

            {/* ONLY ONE - BUTTON */}
            <button onClick={() => dispatch(decreaseQty(item.id))}>
              -
            </button>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
