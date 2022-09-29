import React from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import logo from "./logo.svg";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuSharpIcon />
        <img className='header__logo' src={logo} alt='logo' />
      </div>

      <div className='header__input'>
        <input placeholder='Search' type='text' />
        <SearchSharpIcon className='header__searchButton' />
      </div>

      <div className='header__icons'>
        <VideoCallOutlinedIcon className='header__icon' />
        <NotificationsOutlinedIcon className='header__icon' />
        <Avatar sx={{ width: 28, height: 28 }} className='header__icon'>
          I
        </Avatar>
      </div>

      {/* <button></button> */}
    </div>
  );
}

export default Header;
