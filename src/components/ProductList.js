import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { addToWishlist } from '../features/wishlist/wishlistSlice'

const demoProducts = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 250 },
  { id: 3, name: 'Product C', price: 400 },
]

const ProductList = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Products</h2>
      {demoProducts.map(p => (
        <div key={p.id} style={{ marginBottom: '10px' }}>
          <span>{p.name}</span>
          <span> - ₹{p.price}</span>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
          <button onClick={() => dispatch(addToWishlist(p))}>
            Add to Wishlist
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
