import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import Active from "./Active";
import { Typography } from "@mui/material";
import Vulnerability from "./Vulnerability";
function createData(name) {
  return { name };
}

const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ActiveVuln() {
  return (
    <div className="active-vuln">
      <div className="active-feed">
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Activity Feed
        </div>

        <div
          style={{
            borderTop: "2px solid rgba(0, 0, 0, 0.2)",
            overflowY: "scroll",
            maxHeight: "40vh",
            margin: "10px",
          }}
        >
          <Active />
        </div>
      </div>
      <div className="vulnerability-feed">
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Vulnerability Feed
        </div>
        <div
          style={{
            overflowY: "scroll",
            borderTop: "2px solid rgba(0, 0, 0, 0.2)",
            maxHeight: "40vh",
            margin: "10px",
          }}
        >
          <Vulnerability />
        </div>
      </div>
    </div>
  );
}
