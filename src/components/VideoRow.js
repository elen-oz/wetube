import React from "react";
import { getFormatCheck } from "../utilities";
import { Avatar } from "@mui/material";
import "../styles/VideoRow.css";

function VideoRow({
  id,
  videoThumbnail,
  videoName,
  channelName,
  views,
  channelThumbnail,
}) {
  videoThumbnail = getFormatCheck(videoThumbnail);

  return (
    <div className='videoRow'>
      <div className="videoRow__wrapper">     
        <a href={"../video/" + id}>
          <img
            className='videoRow__thumbnail'
            src={"/assets/videos/" + videoThumbnail}
            alt={videoName}
          />
        </a>

        <div className='videoRow__info'>
          <a className='text' href={"../video/" + id}>
            <h4 className="videoRow__title">{videoName}</h4>
          </a>
          <p className='videoRow__description'>{views} views</p>

          <div className='videoRow__description videoRow__channel'>
            <Avatar
              className='videoRow__avatar'
              alt={channelName}
              src={"/assets/channels/" + channelThumbnail}
              sx={{ width: 33, height: 33 }}
            />
            <p>{channelName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
