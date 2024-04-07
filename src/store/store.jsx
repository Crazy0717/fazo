import { configureStore } from "@reduxjs/toolkit";
import transparentBlackBackground from "../slices/transparent-black-background";
import boxes from "../slices/boxesLoading";
import auth from "../slices/auth";

export const store = configureStore({
  reducer: { background: transparentBlackBackground, boxes: boxes, auth: auth },
});
