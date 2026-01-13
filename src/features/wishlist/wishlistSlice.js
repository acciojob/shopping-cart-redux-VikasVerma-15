import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // similar structure to cart item; qty not needed usually
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const { id, name, price } = action.payload
      const exists = state.items.find(i => i.id === id)
      if (!exists) state.items.push({ id, name, price })
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    clearWishlist(state) {
      state.items = []
    },
  },
})

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions

export default wishlistSlice.reducer
