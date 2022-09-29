import React from "react";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage({ videosData }) {
  const videosComponents = [];

  for (let i = 0; i < videosData.length; i += 1) {
    const video = videosData[i];

    videosComponents.push(
      <VideoRow
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
      <VideoRow />
    </div>
  );
}

export default SearchPage;
