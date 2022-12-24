import React from "react";

import { Nut } from "../Elements/Doughnut";

function RightDoughNut({ data }) {
  let values = [];

  console.log(data);

  try {
    data.new == "NA" ? values.push(0) : values.push(data.new);
    data.informative == "NA" ? values.push(0) : values.push(data.informative);
    data.triaged == "NA" ? values.push(0) : values.push(data.triaged);
    data.resolve == "NA" ? values.push(0) : values.push(data.resolve);
  } catch (e) {
    console.log(e);
  }
  let toPlot = {
    values: values,
    backgroundColors: [
      { red: 25, green: 195, blue: 230 },
      { red: 159, green: 155, blue: 155 },
      { red: 228, green: 31, blue: 114 },
      { red: 178, green: 198, blue: 21 },
    ],
  };
  return <Nut data={toPlot} />;
}

export default RightDoughNut;
