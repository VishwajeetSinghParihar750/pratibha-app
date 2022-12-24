import React from "react";
import ChartBox from "./Chartbox/Index";

import ActiveVuln from "./ActivityFeed/Index";

import AssetTable from "./AssetsList/Index";

export default function Dashboard() {
  return (
    <>
      <div>
        <ChartBox />
        <AssetTable />
        <ActiveVuln />
      </div>
    </>
  );
}
