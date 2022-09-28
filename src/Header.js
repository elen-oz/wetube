import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import logo from "./logo.svg";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';


function Header() {
  return (
    <div className='header'>
      <MenuSharpIcon />
      <img 
        className="header__logo"
        src={logo}
        alt="logo"
      />
      <input type="text" />
      <SearchSharpIcon />
      <MicOutlinedIcon />
      <VideoCallOutlinedIcon />
      <AppsSharpIcon />
      <NotificationsOutlinedIcon />
      <Avatar>I</Avatar>
      {/* <button></button> */}
    </div>
  );
}

export default Header;
