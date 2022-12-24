import React from "react";
import Popup from "reactjs-popup";
import Report from "./ReportVisuals";

function PopupReport(props) {
  return (
    <>
      <Popup trigger={props.children} modal>
        <div>
          <Report />
        </div>
      </Popup>
    </>
  );
}

export default PopupReport;
