import React from "react";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Active from "../Active";
// import CommonCVE from "./RightChart/CommonCVE";
// import { Typography } from "@mui/material";
// import { SemiNut } from "./LeftChart/SemiNut";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { Bar, Bars } from "./LeftChart/Bar";

import TopSection from "./TopSection/Index";
import LeftSection from "./LeftSection/Index";
import RightSection from "./RightSection/Index";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   height: "100px",
//   color: theme.palette.text.secondary,
// }));

export default function ChartBox() {
  return (
    <div className="dashboard-box">
      <div className="chart-box">
        <TopSection />
        <div style={{ display: "flex" }}>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
}
