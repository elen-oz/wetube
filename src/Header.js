import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import logo from "./logo.svg";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuSharpIcon />
        <Link to='/'>
          <img className='header__logo' src={logo} alt='wetube logo' />
        </Link>
      </div>

      <div className='header__input'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder='Search'
          type='text'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className='header__searchButton' />
        </Link>
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
