import React from "react";
import { Avatar } from "@mui/material";

function VideoCard({
  videoThumbnail,
  videoName,
  channelName,
  views,
  channelThumbnail,
}) {
  return (
    <div>
      <img scr={videoThumbnail} alt='' />
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
