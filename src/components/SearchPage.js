import React from "react";
import "../styles/SearchPage.css";
import { getDataVideoRow } from "../utilities";

function SearchPage({ videosData }) {
  const videosComponents = getDataVideoRow(videosData);

  return (
    <div className='searchPage'>
        <div className='searchPage__videos'>{videosComponents}</div>
    </div>
  );
}

export default SearchPage;
