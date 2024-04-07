import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
}

const authService = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUserStart: (state) => {
      state.isLoading = true
    },
    authUserSuccess: (state, action) => {
      state.user = action.payload
      state.isLoading = false
      state.loggedIn = true
      state.error = null
    },

    authUserError: (state, actions) => {
      state.isLoading = false
      state.error = actions.payload
    },

    logoutUser: (state) => {
      state.user = null
      state.loggedIn = false
    },
  },
})

export const { authUserStart, authUserSuccess, authUserError, logoutUser } =
  authService.actions

export default authService.reducer
