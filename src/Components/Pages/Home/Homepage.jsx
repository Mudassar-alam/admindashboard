import React, { useContext, useState } from "react";
import "./homepage.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Widgets from "../Widgets/Widgets";
import Featured from "../Featured/Featured";
import FeaturedChart from "../Charts/FeaturedChart";
import List from "../List/List";
import New from "../New/New";
import TableTransaction from "../Table/TableTransaction";
import Single from "../Signle/Single";
import { productInputs, userInputs } from "../FormSource";
import '../../Moodstyle/dark.scss';
import { DarkModeContext } from "../../Contextapi/DarkModeContext";

function Homepage() {

  const {darkMode} = useContext(DarkModeContext)


  return (
    <>
      <Router>
        <div className={darkMode?'HomeMainContainer darMode':'HomeMainContainer'}>
          <Grid container>
            <Navbar/>

            <Grid item xl={2} sm={2} xs={2}>
              <Sidebar />
            </Grid>
            <Grid item xl={10} sm={10} xs={10} className='contentGrid' >
              <Switch>
                <Route exact path="/">
                  <div className="widgetsContainer">
                    <Widgets type="user" />
                    <Widgets type="order" />
                    <Widgets type="earning" />
                    <Widgets type="balance" />
                  </div>
                  <div className="charts">
                    <Featured />
                    <FeaturedChart name="Expect Chart" height="350" />
                  </div>
                  <TableTransaction title="Latest Transactions" />
                </Route>
                {/* For Users */}
                <Route exact path="/users"><List /></Route>
                <Route exact path="/users/id"><Single /></Route>
                <Route exact path="/users/new">
                  <New
                    input={userInputs}
                    title="Add New User"
                    button="Add User"
                  />
                </Route>
                {/* For Products */}
                <Route exact path="/products"><List /></Route>
                <Route exact path="/products/productid"><Single /></Route>
                <Route exact path="/products/new">
                  <New
                    input={productInputs}
                    title="Add New Product"
                    button="Add Product"
                  />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    </>
  );
}
export default Homepage;
