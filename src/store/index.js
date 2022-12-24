import { configureStore } from "@reduxjs/toolkit";
import stepsSlice from "./stepsSlice";
import dashboardInfoSlice from "./dashboardInfoSlice";

let store = configureStore({
  reducer: {
    steps: stepsSlice.reducer,
    dashboardInfo: dashboardInfoSlice.reducer,
  },
});

export default store;
