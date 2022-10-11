import React from "react";
import { Avatar } from "@mui/material";
import { videoIDToEmbed } from "../utilities";
import "../styles/VideoContent.css";

function VideoContent({
  videoId,
  videoName,
  channelName,
  views,
  channelThumbnail,
}) {
  return (
    <div>
      <div className='videoContent__wrapper'>
        <iframe
          className='videoContent__iframe'
          width='875'
          height='492'
          src={videoIDToEmbed(videoId)}
          title={videoName}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>

      <div className='videoContent'>
        <div className='videoContent__info'>
          <h4 className='videoContent__name'>{videoName}</h4>
          <p className='videoContent__views'>{views} views</p>
          <div className='videoContent_info'>
            <Avatar
              className='videoContent__avatar'
              alt={channelName}
              src={"/assets/channels/" + channelThumbnail}
              sx={{ width: 38, height: 38 }}
            />
            <p>{channelName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
