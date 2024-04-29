import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  favoriteDeterminer: [],
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
  },
})

export const { addFavorite } = authService.actions

export default authService.reducer
