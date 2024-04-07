import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  backgroundState: false,
  navBarsBlockState: false,
  categoryBlockResState: false,
  logoutModal: false,
}

export const counterSlice = createSlice({
  name: "transparent-black-background-slice",
  initialState,
  reducers: {
    enableNavBarsBlock: (state) => {
      state.backgroundState = true
      state.navBarsBlockState = true
    },
    disableNavBarsBlock: (state) => {
      state.backgroundState = false
      state.navBarsBlockState = false
    },
    enableNavCategoryResBlock: (state) => {
      state.backgroundState = true
      state.categoryBlockResState = true
    },
    disableNavCategoryResBlock: (state) => {
      state.backgroundState = false
      state.categoryBlockResState = false
    },
    enableLogoutModal: (state) => {
      state.backgroundState = true
      state.logoutModal = true
    },
    disableLogoutModal: (state) => {
      state.backgroundState = false
      state.logoutModal = false
    },
    disablEveryThing: (state) => {
      state.backgroundState = false
      state.navBarsBlockState = false
      state.categoryBlockResState = false
      state.logoutModal = false
    },
  },
})

export const {
  enableNavBarsBlock,
  disableNavBarsBlock,
  enableNavCategoryResBlock,
  disableNavCategoryResBlock,
  disablEveryThing,
  enableLogoutModal,
  disableLogoutModal,
} = counterSlice.actions

export default counterSlice.reducer
