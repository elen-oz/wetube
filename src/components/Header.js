import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import logo from "../logo.svg";
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

      <div>
        <form className='header__input-form'>
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            placeholder='Search'
            type='text'
          />

          <Link to={`/search/${inputSearch}`}>
            <button className='header__searchButton' type='submit'>
              <SearchSharpIcon className='header__searchButton-icon' />
            </button>
          </Link>
        </form>
      </div>

      <div className='header__icons'>
        <a
          className='text'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/elen-oz'
        >
          <VideoCallOutlinedIcon className='header__icon' />
        </a>
        <a
          className='text'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/elen-oz/'
        >
          <NotificationsOutlinedIcon className='header__icon' />
        </a>
        <a
          className='text'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/lenka_oz/'
        >
          <Avatar sx={{ width: 28, height: 28 }} className='header__icon'>
            E
          </Avatar>
        </a>
      </div>
    </div>
  );
}

export default Header;
