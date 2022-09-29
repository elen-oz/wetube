import React from "react";
import { Avatar } from "@mui/material";
import getFormatCheck from "./formatCheck";
import "./VideoCard.css";

function VideoCard({
  id,
  videoThumbnail,
  videoName,
  channelName,
  views,
  channelThumbnail,
}) {
  videoThumbnail = getFormatCheck(videoThumbnail);
  return (
    <div className='videoCard'>
      <a href={"./video/" + id}>
        <img
          className='videoCard__thumbnail'
          src={"/assets/videos/" + videoThumbnail}
          alt={videoName}
        />
      </a>
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={channelName}
          src={"/assets/channels/" + channelThumbnail}
          sx={{ width: 38, height: 38 }}
        />
        <div className='videoCard__text'>
          <a className='text' href={"./video/" + id}>
            <h4>{videoName}</h4>
          </a>
          <p>{channelName}</p>
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
