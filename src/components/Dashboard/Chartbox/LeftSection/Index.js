import React, { useEffect, useState } from "react";

import { data, Nut } from "./Elements/Doughnut";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Gauge from "./Elements/Gauge";
import { useRef } from "react";
import LeftCharts from "./LeftCharts/LeftCharts";
import MakeLeftCharts from "./LeftCharts/MakeLeftCharts";
import RightCharts from "./RIghtCharts/RightCharts";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { dashboardInfoSliceActions } from "../../../../store/dashboardInfoSlice";

import ArrangeData from "../../../../Util/Functions/ArrangeData";
import MakeRightCharts from "./RIghtCharts/MakeRightCharts";

function Index(props) {
  let dispatch = useDispatch();
  let dashboardInfo = useSelector((state) => state.dashboardInfo.data);

  let [currentTarget, setCurrentTarget] = useState(3);

  let targets = [
    { id: "1", name: "Target1" },
    { id: "63762ddbb7e0efa6b95168cd", name: "Target2" },
    { id: "3d", name: "Target3" },
    { id: "all", name: "All" },
  ];

  useEffect(() => {
    let toRun = async () => {
      console.log(targets[currentTarget]?.id);

      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/getManagerAssets`,
          { targets: targets[currentTarget]?.id },
          { withCredentials: true }
        );

        console.log("response  : ", response);
        let data = ArrangeData(response.data);
        dispatch(dashboardInfoSliceActions.setDashboardInfo(data));
        console.log(dashboardInfo);
      } catch (e) {
        console.log(e);
      }
    };
    toRun();
  }, [currentTarget]);

  let handleTargetChange = (e) => {
    let toSet = e.currentTarget?.value || e.target?.value;
    setCurrentTarget(() => toSet);
  };

  return (
    <div
      className="left-chart"
      // style={{ border: "1px solid red", padding: "10px" }}
    >
      <div>
        <FormControl>
          <InputLabel sx={{ color: "#000" }}>Target</InputLabel>

          <Select
            defaultValue={3}
            sx={{
              width: "75vh",
              height: "45px",
              backgroundColor: "#D9D9D940",
              border: "0px solid rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            }}
            labelId="demo-simple-select-label"
            //   id="demo-simple-select"
            //   value={age}
            label="Age"
            onChange={handleTargetChange}
          >
            {targets.map((target, i) => {
              return <MenuItem value={i}>{target.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", margin: "40px 0" }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Gauge />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              // border: "1px solid blue",
            }}
          >
            <div>
              <div className="chart-risk-score">{dashboardInfo.riskScore}</div>
              <div className="risk-score-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Risk Score
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
            marginTop: "15px",
          }}
        >
          <div style={{ width: "44%" }}>
            <MakeLeftCharts />
          </div>
          <div style={{ width: "44%" }}>
            <MakeRightCharts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
