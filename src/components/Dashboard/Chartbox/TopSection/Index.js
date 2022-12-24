import React from "react";
import InfoCards from "./InfoCards";
import { useSelector } from "react-redux";

function Index(props) {
  let data = useSelector((state) => state.dashboardInfo.data);

  return <InfoCards data={data} />;
}

export default Index;
