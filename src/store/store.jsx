import { configureStore } from '@reduxjs/toolkit'
import transparentBlackBackground from '../slices/transparent-black-background'

export const store = configureStore({
  reducer: {background: transparentBlackBackground},
})