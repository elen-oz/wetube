import React from "react";
import VideoRow from "./VideoRow";
import { useParams } from "react-router-dom";
import { SearchForVideo } from "../utilities";
import "../styles/SearchPage.css";


function SearchPage({ videosData }) {
  let searchTerm = useParams().searchTerm;
  let videos = SearchForVideo({ videosData, searchTerm });
  const videosComponents = [];

  for (let i = 0; i < videos.length; i += 1) {
    const video = videos[i];

    videosComponents.push(
      <VideoRow
        id={video.id}
        videoId={video.videoId}
        videoThumbnail={video.videoThumbnail}
        videoName={video.videoName}
        channelName={video.channelName}
        views={video.views}
        channelThumbnail={video.channelThumbnail}
      />
    );
  }

  return (
    <div className='searchPage'>
      <hr />
      <div>
        <div className='videoRow__videos'>{videosComponents}</div>
      </div>
    </div>
  );
}

export default SearchPage;
