import React from "react";
import Popup from "reactjs-popup";
import Report from "./Report";

function PopupReport(props) {
  return (
    <>
      <Popup trigger={props.children}>
        <div>
          <Report />
        </div>
      </Popup>
    </>
  );
}

export default PopupReport;
