import React from "react";
import { Avatar } from "@mui/material";
import getFormatCheck from "./formatCheck";

function VideoCard({
  videoThumbnail,
  videoName,
  channelName,
  views,
  channelThumbnail,
}) {
  videoThumbnail = getFormatCheck(videoThumbnail);
  console.log("/assets/videos/" + videoThumbnail);
  return (
    <div>
      <img src={"/assets/videos/" + videoThumbnail} alt={videoName} />
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={channelName}
          src={channelThumbnail}
          sx={{ width: 24, height: 24 }}
        />
        <div className='video__text'>
          <h4>{videoName}</h4>
          <p>{channelName}</p>
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
