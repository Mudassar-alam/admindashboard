import React from "react";
import { Tab } from "react-bootstrap";
import FeaturedChart from "../Charts/FeaturedChart";
import TableTransaction from "../Table/TableTransaction";
import "./single.scss";
function Single() {
  return (
    <>
      <div className="singleContainer">
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
                className="itemImg"
              />
              <div className="Details">
                  <h1 className="itemTitle">John Doe</h1>
                  <div className="detailsItem">
                      <span className="itemKey">Email :</span>
                      <span className="itemValue">johndoe@gmail.com</span>
                  </div>
                  <div className="detailsItem">
                      <span className="itemKey">Phone :</span>
                      <span className="itemValue">+1 2345 67 98</span>
                  </div>
                  <div className="detailsItem">
                      <span className="itemKey">Address :</span>
                      <span className="itemValue">Nishtar Town, Lahore</span>
                  </div>
                  <div className="detailsItem">
                      <span className="itemKey">Coutry  :</span>
                      <span className="itemValue">Pakistan</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="right">
          {/* <h1 className="title">Information</h1> */}
            <FeaturedChart name='User Spending' height='200' />
          </div>
        </div>
        <div className="bottom">
          <TableTransaction title='Last Transactions' />
        </div>
      </div>
    </>
  );
}
export default Single;
