import React from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import { useState } from "react";

import RightDoughNut from "./RightDoughNut";
import RightBar from "./RightBar";

export default function RightCharts({ data }) {
  const [chartType, setChartType] = useState(1);

  const handleIconClick = (e) => {
    setChartType(() => !chartType);
  };
  return (
    <div
      style={{
        // width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          // border: "1px solid pink",
          width: "100%",
          position: "relative",
        }}
      >
        <div
        // style={{ margin: "15px 15px 0 15px" }}
        >
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              cursor: "pointer",
            }}
            onClick={handleIconClick}
          >
            {!chartType && <BarChartIcon />}
            {chartType && <PieChartIcon />}
          </div>
          <div style={{ padding: "22px", paddingBottom: "0" }}>
            {!chartType && (
              <div style={{ marginBottom: " 22px" }}>
                <RightDoughNut data={data} />
              </div>
            )}
            {chartType && <RightBar data={data} />}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // padding: "0 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // margin: "10px 0",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", display: "flex", margin: "0 10px" }}>
                <span>
                  <FiberManualRecordRoundedIcon
                    sx={{ color: "rgb(25, 195, 230)", fontSize: "20px" }}
                  />
                </span>

                <span>New</span>
              </div>
              <div style={{ width: "50%", display: "flex", margin: "0 10px" }}>
                <FiberManualRecordRoundedIcon
                  sx={{ color: "rgb(159, 155, 155)", fontSize: "20px" }}
                />
                <span> Informative</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", display: "flex", margin: "0 10px" }}>
                <FiberManualRecordRoundedIcon
                  sx={{ color: "rgb(228, 31, 114) ", fontSize: "20px" }}
                />
                <span> Triaged</span>
              </div>
              <div style={{ width: "50%", display: "flex", margin: "0 10px" }}>
                <FiberManualRecordRoundedIcon
                  sx={{ color: "rgb(178, 198, 21)", fontSize: "20px" }}
                />
                <span> Resolve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
