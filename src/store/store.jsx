import { configureStore } from "@reduxjs/toolkit";
import transparentBlackBackground from "../slices/transparent-black-background";
import boxes from "../slices/boxes";

export const store = configureStore({
  reducer: { background: transparentBlackBackground, boxes: boxes },
});
