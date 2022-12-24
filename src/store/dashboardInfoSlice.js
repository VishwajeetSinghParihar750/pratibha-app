import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    totalAssets: 0,
    totalVulnerabilities: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    assets: [],
  },
};

let dashboardInfoSlice = createSlice({
  name: "stepsSlice",
  initialState: initialState,
  reducers: {
    setDashboardInfo(state, action) {
      state.data = action.payload;
    },
  },
});

export const dashboardInfoSliceActions = dashboardInfoSlice.actions;

export default dashboardInfoSlice;
