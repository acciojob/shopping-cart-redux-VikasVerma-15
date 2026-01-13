import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // each item: { id, name, price, qty }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price } = action.payload
      const existing = state.items.find(item => item.id === id)
      if (existing) {
        existing.qty += 1
      } else {
        state.items.push({ id, name, price, qty: 1 })
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    increaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.qty += 1
    },
    decreaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload)
      if (item && item.qty > 1) {
        item.qty -= 1
      } else if (item) {
        // if qty goes to 0, remove it
        state.items = state.items.filter(i => i.id !== action.payload)
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
