import React from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Coupon from './Coupon'

const App = () => {
  return (
    <div>
      <h1>Shopping Cart Application</h1>
      <ProductList />
      <Cart />
      <Wishlist />
      <Coupon />
    </div>
  )
}

export default App
