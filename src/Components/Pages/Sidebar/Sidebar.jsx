import React, { useContext } from "react";
import './sidebar.scss';
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { DarkModeContext } from "../../Contextapi/DarkModeContext";

function Sidebar() {

  const {dispatch} = useContext(DarkModeContext);
  


  return (
    <>
      <div className="sidebar">   
        <div className="center">
          <ul>
          <div>
          </div>
          <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon"/>
              <Link  to='/' style={{textDecoration:'none'}}><span id="linkID">Dashboard</span></Link>
            </li>
            <p className="title">LISTS</p>
            <li>
            <PersonOutlinedIcon className="icon"/>
             <Link to='/users' style={{textDecoration:'none'}}><span>Users</span></Link> 
            </li>
            <li>
            <AddBusinessIcon className="icon" />
             <Link to='/products' style={{textDecoration:'none'}}><span>Products</span></Link>
            </li>
            <li>
            <CallToActionIcon className="icon" />
              <span>Orders</span>
            </li>
            <li>
            <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFULL</p>
            <li>
            <AnalyticsIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
            <NotificationsNoneOutlinedIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
            <PsychologyIcon  className="icon"/>
              <span>Logs</span>
            </li>
            <li>
            <SettingsIcon  className="icon"/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
            <AccountCircleIcon  className="icon"/>
              <span>Profile</span>
            </li>
            <li>
            <ExitToAppIcon  className="icon"/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOptions" onClick={()=>dispatch({type:"DARK"})}></div>
            
        </div>
      </div>
    </>
  );
}
export default Sidebar;
