import React from "react";
import FeaturedChart from "../Charts/FeaturedChart";
import Featured from "../Featured/Featured";
import TableTransaction from "../Table/TableTransaction";
import "./allcharts.scss";
function Allcharts() {
  return (
    <>
      <div className="charts">
        <Featured />
        <FeaturedChart name="Expect Chart" height="350" />
      </div>
      <TableTransaction title="Latest Transactions" />
    </>
  );
}
export default Allcharts;
