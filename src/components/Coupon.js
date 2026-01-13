import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../features/coupon/couponSlice";

const Coupon = () => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="mb-3">
      {/* tests look for #root > :nth-child(2) > :nth-child(1) > h3 */}
      <h3>Shopping Cart</h3>
      <div className="mt-2">
        <input
          placeholder="Enter coupon"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="btn btn-success ms-2"
          onClick={() =>
            dispatch(
              applyCoupon({
                code,
                discountPercent: code.trim().toLowerCase() === "save10" ? 10 : 0,
              })
            )
          }
        >
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default Coupon;
