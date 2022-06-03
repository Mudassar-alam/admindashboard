import React, { useContext, useState } from "react";
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../Contextapi/DarkModeContext";

function Navbar(){

    const {dispatch} = useContext(DarkModeContext)

    return(
        <>
        <div className="navbar">
           <div className="wrapper">
           <div className="top">
           <Link to='/' style={{textDecoration:'none'}}>
           <span className="logo">React JS</span>
           </Link>
            </div>
            <div className="search">
                <input type='text' placeholder="Search" />
                <SearchIcon />
            </div>
            <div className="items">
                <div className="item">
                <LanguageIcon />
                English
                </div>
                <div className="item">
                <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
                </div>
                <div className="item">
                <FullscreenExitOutlinedIcon className="icon" />
                </div>
                <div className="item">
                <Badge badgeContent={4} color="secondary">
                <NotificationsNoneOutlinedIcon className="icon"/>
                </Badge>
                </div>
                <div className="item">
                <Badge badgeContent={4} color="secondary">
                <ChatBubbleOutlineOutlinedIcon className="icon"/>
                </Badge>
                </div>
                <div className="item">
                <ListOutlinedIcon className="icon" />
                </div>
                <div className="item">
                <Avatar alt="Mudassar" />
                </div>
                <div className="item">
                
                </div>
            </div>
           </div>

        </div>
        </>
    )
}
export default Navbar;