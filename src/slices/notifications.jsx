import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  favoriteDeterminer: [],
  cartCount: 0,
  favoriteCount: 0,
}

const authService = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.favoriteDeterminer.includes(action.payload)) {
        const index = state.favoriteDeterminer.indexOf(action.payload)
        if (index > -1) {
          state.favoriteDeterminer.splice(index, 1)
        } else {
          console.log("item not found")
        }
      } else {
        state.favoriteDeterminer = [...state.favoriteDeterminer, action.payload]
      }
    },
    changeCounts: (state, action) => {
      state.cartCount = action.payload.cartCounts
      state.favoriteCount = action.payload.favCounts
    },
  },
})

export const { addFavorite, changeCounts } = authService.actions

export default authService.reducer
