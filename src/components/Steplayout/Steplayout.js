import React from "react";
import { Outlet } from "react-router-dom";
import StepsSideBar from "./StepsSideBar";

function Steplayout() {
  return (
    <div>
      <StepsSideBar />
      <div className="outlet-color">
        <Outlet />
      </div>
    </div>
  );
}

export default Steplayout;
