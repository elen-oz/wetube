import React from "react";
import { Avatar } from "@mui/material";
import VideoIDToEmbed from "./VideoIDToEmbed";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';


import "./VideoContent.css";

function VideoContent({
  id,
  videoId,
  videoThumbnail,
  videoName,
  channelName,
  views,
  channelThumbnail,
}) {

  return (

    <div>
      <div>
        {/* <iframe width="875" height="492" src="https://www.youtube.com/embed/e3EfNfE8pCU" title="LOTUS - Everything You Need to Know | Up To Speed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe
          width='875'
          height='492'
          src={VideoIDToEmbed(videoId)}
          title={videoName}
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          
        ></iframe>
      </div>

      <div className='videoContent'>
        {/* <img
          className='videoRow__thumbnail'
          src={"/assets/videos/" + videoThumbnail}
          alt={videoName}
        /> */}
        <div className='videoContent__info'>
          <h4 className='videoContent__name'>{videoName}</h4>
          <p className='videoContent__views'>{views}</p>

          <div className="videoContent__icons">
            ThumbUpOutlinedIcon
            ThumbDownOffAltOutlinedIcon
            ReplySharpIcon
          </div>

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
