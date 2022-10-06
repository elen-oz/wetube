import React from "react";
import "../styles/MainSection.css";
import { getDataVideoCard } from "../utilities";

function MainSection({ videosData }) {
  const videosComponents = getDataVideoCard(videosData);

  return (
    <div className='mainSection'>
      <div className="mainSection__videos">
      {videosComponents}
      </div>
    </div>
  );
}

export default MainSection;
