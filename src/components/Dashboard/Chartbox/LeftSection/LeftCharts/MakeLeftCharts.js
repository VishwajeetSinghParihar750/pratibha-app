import React from "react";
import LeftCharts from "./LeftCharts";
import { useSelector } from "react-redux";

function MakeLeftCharts(props) {
  let data = useSelector((state) => state.dashboardInfo.data);

  return <LeftCharts data={data} />;
}

export default MakeLeftCharts;
