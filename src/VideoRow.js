import React from 'react';
import { Avatar } from "@mui/material";
import './VideoRow.css';

function VideoRow({
  videoThumbnail,
  videoName,
  channelName,
  views,
  channelThumbnail,
}) {
  
  return (
    <div className='videoRow'>
      <img className="videoRow__thumbnail" src={"/assets/videos/" + videoThumbnail} alt={videoName} />
      <div className='videoRow__info'>
        
        <h4>{videoName}</h4>
        <p className='videoRow__description'>{views}</p>
        
        <div className="videoRow__description videoRow__title">
          <Avatar
            className='videoRow__avatar'
            alt={channelName}
            src={"/assets/channels/" + channelThumbnail} alt={channelName}
            sx={{ width: 33, height: 33 }}
          />
          <p>{channelName}</p>
        </div>
    
      </div>
    </div>
  );
}

export default VideoRow