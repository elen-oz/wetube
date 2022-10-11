import React from "react";
import "../styles/MainPage.css";
import { getDataVideoCard } from "../utilities";

function MainPage({ videosData }) {
  const videosComponents = getDataVideoCard(videosData);

  return (
    <div className='mainPage'>
      <div className="mainPage__videos">
      {videosComponents}
      </div>
    </div>
  );
}

export default MainPage;
