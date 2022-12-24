import React from "react";
import BarChart1 from "../Elements/Bar";

function LeftBar({ data }) {
  let values = [];

  try {
    data.criticalVulnerabilities == "NA"
      ? values.push(0)
      : values.push(data.criticalVulnerabilities);
    data.highVulnerabilities == "NA"
      ? values.push(0)
      : values.push(data.highVulnerabilities);
    data.highVulnerabilities == "NA"
      ? values.push(0)
      : values.push(data.highVulnerabilities);
    data.lowVulnerabilities == "NA"
      ? values.push(0)
      : values.push(data.lowVulnerabilities);
  } catch (e) {
    console.log(e);
  }
  let toPlot = {
    values: values,
    backgroundColors: [
      { red: 206, green: 55, blue: 51 },
      { red: 236, green: 136, blue: 48 },
      { red: 253, green: 188, blue: 44 },
      { red: 55, green: 164, blue: 64 },
    ],
  };
  return <BarChart1 dataToUse={toPlot} />;
}

export default LeftBar;
