import React from "react";
import RightCharts from "./RightCharts";
import { useSelector } from "react-redux";

function MakeRightCharts(props) {
  let data = useSelector((state) => state.dashboardInfo.data);

  return <RightCharts data={data} />;
}

export default MakeRightCharts;
