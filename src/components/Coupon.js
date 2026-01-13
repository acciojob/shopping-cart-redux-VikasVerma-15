import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../features/coupon/couponSlice";

const Coupon = () => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        placeholder="Enter coupon"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => dispatch(applyCoupon(code))}
      >
        Apply Coupon
      </button>
    </div>
  );
};

export default Coupon;
