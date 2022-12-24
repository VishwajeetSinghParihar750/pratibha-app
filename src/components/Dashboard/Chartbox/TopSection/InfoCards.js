import React from "react";
import { Grid } from "@mui/material";

function InfoCards(props) {
  let data = props.data;

  return (
    <div className="chartpage-grid">
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {!props.noAssets && (
          <Grid item xs={2}>
            <div className="box-number" style={{ backgroundColor: "#F5F5F5" }}>
              <h1>{data?.totalAssets}</h1>
              <div className="box-2">Total Assets</div>
            </div>
          </Grid>
        )}
        <Grid item xs={2}>
          <div className="box-number " style={{ backgroundColor: "#F5F5F5" }}>
            <h1>{data?.totalVulnerabilities}</h1>
            <div className="box-2">
              {!props.customTotalVulnerabilityText && "Total Vulnerabilities"}
              {props.customTotalVulnerabilityText &&
                `${props.customTotalVulnerabilityText}`}
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="box-number " style={{ backgroundColor: "#CE3733" }}>
            <h1>
              <span style={{ color: "white" }}>
                {data?.criticalVulnerabilities}
              </span>
            </h1>
            <div className="box-2">Critical</div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="box-number " style={{ backgroundColor: "#EC8830" }}>
            <h1>
              <span style={{ color: "white" }}>
                {data?.highVulnerabilities}
              </span>
            </h1>
            <div className="box-2">High </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="box-number " style={{ backgroundColor: "#FDBC2C" }}>
            <h1>
              <span style={{ color: "white" }}>
                {data?.mediumVulnerabilities}
              </span>
            </h1>
            <div className="box-2">Medium</div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="box-number " style={{ backgroundColor: "#37A440" }}>
            <h1>
              <span style={{ color: "white" }}>{data?.lowVulnerabilities}</span>
            </h1>
            <div className="box-2"> Low</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default InfoCards;
