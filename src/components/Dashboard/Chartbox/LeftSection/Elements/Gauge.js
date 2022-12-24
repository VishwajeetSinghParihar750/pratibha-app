import GaugeChart from "react-gauge-chart";

import React from "react";

import { useSelector } from "react-redux";

function Gauge() {
  let dashboardInfo = useSelector((state) => state.dashboardInfo.data);
  let data = dashboardInfo?.rating || 0; // data about severity
  const angle = data / 10.0;
  return (
    <div
    //  style={{ border: "1px solid blue" }}
    >
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={20}
        percent={angle}
        arcPadding={0}
        hideText={true}
        needleBaseColor={"#DDDDDD"}
        arcWidth={0.45}
        cornerRadius={0}
      />
    </div>
  );
}

export default Gauge;
