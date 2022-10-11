import React from "react";
import { Avatar } from "@mui/material";
import { getFormatCheck } from "../utilities";
import "../styles/VideoCard.css";

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
            <h4 className="videoCard__title">{videoName}</h4>
          </a>
          <p className="videoCard__description">{channelName}</p>
          <p className="videoCard__description">{views} views</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
