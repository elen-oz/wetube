import React from "react";
import { Avatar } from "@mui/material";
import "./VideoContent.css";

function VideoContent(
  id,
  videoId,
  videoThumbnail,
  videoName,
  channelName,
  views,
  channelThumbnail
) {
  return (
    <div>
      <div>
        
      <iframe width="875" height="492" src="https://www.youtube.com/embed/e3EfNfE8pCU" title="LOTUS - Everything You Need to Know | Up To Speed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <iframe width="875" height="492" src={videoId} title={videoName} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

      </div>

      {/* <div className='videoContent'>
        <img
          className='videoRow__thumbnail'
          src={"/assets/videos/" + videoThumbnail}
          alt={videoName}
        />
        <div className='videoRow__info'>
          <h4>{videoName}</h4>
          <p className='videoRow__description'>{views}</p>

          <div className='videoRow__description videoRow__title'>
            <Avatar
              className='videoRow__avatar'
              alt={channelName}
              src={"/assets/channels/" + channelThumbnail}
              sx={{ width: 33, height: 33 }}
            />
            <p>{channelName}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default VideoContent;
