import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
};

let stepsSlice = createSlice({
  name: "stepsSlice",
  initialState: initialState,
  reducers: {
    setActiveStep(state, action) {
      state.activeStep = action.payload;
    },
  },
});

export const stepsSliceActions = stepsSlice.actions;

export default stepsSlice;
