import { Info } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoCards from "../../Dashboard/Chartbox/TopSection/InfoCards";
import ArrangeData from "../../../Util/Functions/ArrangeData";
import LeftCharts from "../../Dashboard/Chartbox/LeftSection/LeftCharts/LeftCharts";
import RightCharts from "../../Dashboard/Chartbox/LeftSection/RIghtCharts/RightCharts";

function Report(props) {
  // i will fetch data here as well ...

  let assetInReport = "all"; // this is id

  let [data, setData] = useState();

  useEffect(() => {
    let toRun = async () => {
      let response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/getManagerAssets`,
        { targets: assetInReport },
        { withCredentials: true }
      );
      console.log(response.data);
      setData(() => ArrangeData(response?.data));
    };
    toRun();
  }, [assetInReport]);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "2px solid rgba(0, 0, 0, 0.2)",

        width: "603px",
        height: "431px",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: "500",
          borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
          margin: "15px 20px 0 20px",
          paddingBottom: "10px",
        }}
      >
        Description
      </div>

      <div>
        <InfoCards
          data={data}
          noAssets={true}
          customTotalVulnerabilityText={"Total"}
        />
      </div>
      <div style={{ transform: "translate(0, -15px)" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ width: "33%" }}>
            <LeftCharts data={data} />
          </div>
          <div style={{ width: "33%" }}>
            <RightCharts data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
