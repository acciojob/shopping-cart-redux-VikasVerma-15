import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromWishlist,
} from '../features/wishlist/wishlistSlice'

const Wishlist = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.wishlist.items)

  return (
    <div>
      <h2>Wishlist</h2>
      {items.length === 0 && <p>No items in wishlist.</p>}
      {items.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <span>{item.name}</span>
          <span> - ₹{item.price}</span>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Wishlist
