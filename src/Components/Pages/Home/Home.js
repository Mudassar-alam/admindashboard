import React, { useContext, useEffect, useRef, useState } from "react";
import "./homepage.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Navigate
} from "react-router-dom";
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
import "../../Moodstyle/dark.scss";
import { DarkModeContext } from "../../Contextapi/DarkModeContext";
import AllWidgets from "../Widgets/AllWidgets";
import Allcharts from "../AllCharts/Allcharts";
import OtherHomeWidgets from "./OtherHomeWidgets";
import Login from "../Login/Login";

function Home() {
  const { darkMode } = useContext(DarkModeContext);

  // const PrivateRout = ({ children })=>{
  //   const currUser = useRef(false);

  //   useEffect(({ children })=>{
  //  return   currUser ? children : <Navigate to='login' />
  //   },[currUser])

  //   return   currUser ? children : <Navigate to='login' />
  // }
  const currentUser = true;




  const RequiredAuth = ({ children }) => {
    console.log(currentUser)
    return currentUser ? (children) : <Login />
    //<Navigate to='login' />
  }

  // useEffect(()=>{
  //   const currentUser = false;
  // },[])

  return (
    <>
      <div
        className={darkMode ? "HomeMainContainer darMode" : "HomeMainContainer"}
      >
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
          </Routes>
          <RequiredAuth>
            <Grid container>
              <Navbar />
              {console.log('3232')}
              <Grid item xl={2} sm={2} xs={2}>
                <Sidebar />
              </Grid>
              <Grid item xl={10} sm={10} xs={10} className="contentGrid">
                <Routes>

                  <Route path="/" element={<OtherHomeWidgets />} />
                  <Route path="users">
                    <Route index element={<List />} />
                    <Route path=":userId" element={<Single />} />
                    <Route
                      path="new"
                      element={<New inputs={userInputs} title="Add New User" />}
                    />
                  </Route>
                  <Route path="products">
                    <Route index element={<List />} />
                    <Route path=":productId" element={<Single />} />
                    <Route
                      path="new"
                      element={
                        <New inputs={productInputs} title="Add New Product" />
                      }
                    />
                  </Route>
                </Routes>
              </Grid>
            </Grid>
          </RequiredAuth>

        </BrowserRouter>
      </div>
    </>
  );
}
export default Home;
