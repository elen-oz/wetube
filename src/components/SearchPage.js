import React from "react";
import { useParams } from "react-router-dom";
import { SearchForVideo } from "../utilities";
import "../styles/SearchPage.css";
import { getDataVideoRow } from "../utilities";

function SearchPage({ videosData }) {
  let searchTerm = useParams().searchTerm;
  let videos = SearchForVideo({ videosData, searchTerm });
  const videosComponents = getDataVideoRow(videosData);

  return (
    <div className='searchPage'>
      <div>
        <div className='searchPage__videos'>{videosComponents}</div>
      </div>
    </div>
  );
}

export default SearchPage;
