import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function Featured() {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
         
            <CircularProgress variant="determinate" value={90} />
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$430</p>
          <p className="desc">
            Previous transaction processing. Last payment may not be inculed
          </p>

          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="resultAmount">$512K</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize="small" />
                <div className="resultAmount">$512K</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize="small" />
                <div className="resultAmount">$512K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Featured;
