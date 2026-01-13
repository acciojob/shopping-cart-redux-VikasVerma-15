import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from '../features/cart/cartSlice'
import { removeFromWishlist } from '../features/wishlist/wishlistSlice'
import { removeCoupon } from '../features/coupon/couponSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const coupon = useSelector(state => state.coupon)

  const subtotal = items.reduce((sum, itm) => sum + itm.price * itm.qty, 0)
  const discount = (subtotal * coupon.discountPercent) / 100
  const total = subtotal - discount

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 && <p>No items in cart.</p>}
      {items.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <span>{item.name}</span>
          <span> - ₹{item.price}</span>
          <span> x {item.qty}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <hr />
          <p>Subtotal: ₹{subtotal}</p>
          {coupon.code && (
            <p>
              Coupon {coupon.code}: -₹{discount} (
              {coupon.discountPercent}
              %)
              <button onClick={() => dispatch(removeCoupon())}>Remove</button>
            </p>
          )}
          <p>Total: ₹{total}</p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart
