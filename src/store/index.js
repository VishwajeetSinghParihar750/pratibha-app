import { configureStore } from "@reduxjs/toolkit";
import stepsSlice from "./stepsSlice";

let store = configureStore({
  reducer: {
    steps: stepsSlice.reducer,
  },
});

export default store;
