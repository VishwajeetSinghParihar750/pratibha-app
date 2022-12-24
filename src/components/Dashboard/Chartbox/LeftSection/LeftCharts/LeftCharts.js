import React from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import { useState } from "react";

import LeftDoughNut from "./LeftDoughNut";
import LeftBar from "./LeftBar";

// we can merge leftcharts and rightcharts later as they have the same code
function LeftCharts({ data }) {
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
            {chartType && <BarChartIcon />}
            {!chartType && <PieChartIcon />}
          </div>
          <div style={{ padding: "22px", paddingBottom: "0" }}>
            {chartType && (
              <div style={{ marginBottom: "22px" }}>
                <LeftDoughNut data={data} />
              </div>
            )}
            {!chartType && <LeftBar data={data} />}
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
                    sx={{ color: "#CE3733", fontSize: "20px" }}
                  />
                </span>

                <span> Critical</span>
              </div>
              <div style={{ width: "50%", display: "flex", margin: "0 10px" }}>
                <FiberManualRecordRoundedIcon
                  sx={{ color: "#EC8830", fontSize: "20px" }}
                />
                <span> High</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", display: "flex", margin: "0 10px" }}>
                <FiberManualRecordRoundedIcon
                  sx={{ color: "#FDBC2C", fontSize: "20px" }}
                />
                <span> Medium</span>
              </div>
              <div style={{ width: "50%", display: "flex", margin: "0 10px" }}>
                <FiberManualRecordRoundedIcon
                  sx={{ color: "#37A440", fontSize: "20px" }}
                />
                <span> Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCharts;
