import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
};

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    boxesStart: (state) => {
      state.isloading = true;
    },
    boxesSuccessfully: (state) => {
      state.isloading = false;
    },
    boxesError: (state, error) => {
      state.isloading = false;
      console.log(error);
    },
  },
});

export const { boxesStart, boxesSuccessfully, boxesError } = boxesSlice.actions;

export default boxesSlice.reducer;
