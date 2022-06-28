import React from "react";
import Widgets from "./Widgets";
import './allwidgets.scss'

function AllWidgets() {
  return (
    <>
      <div className="widgetsContainer">
        <Widgets type="user" />
        <Widgets type="order" />
        <Widgets type="earning" />
        <Widgets type="balance" />
      </div>
    </>
  );
}
export default AllWidgets;
