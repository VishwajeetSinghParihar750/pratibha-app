import React from "react";

import CommonCVE from "./CommonCVE";
import { Typography } from "@mui/material";

function Index(props) {
  return (
    <div className="right-chart" style={{}}>
      <div
        style={{
          backgroundColor: "#D9D9D940",
          padding: "10px",
          border: "1px solid rgba(0, 0, 0, 0.25)",
          borderRadius: "5px",
          // position: "absolute",
          width: "89vh",
          opacity: "1100%",

          marginLeft: "0.1%",
        }}
      >
        <span>
          <b>Top Vulnerabilities</b>
        </span>
        <span> &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;</span>
        <span>Most Common CVE</span>
      </div>
      <div className="right-chart-table">
        <CommonCVE />
      </div>
    </div>
  );
}

export default Index;
