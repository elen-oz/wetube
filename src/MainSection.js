import React from "react";
import "./MainSection.css";
import VideoCard from "./VideoCard";

function MainSection({ videosData }) {
  console.log(videosData);
  const videosComponents = [];

  for (let i = 0; i < videosData.length; i += 1) {
    const video = videosData[i];

    videosComponents.push(
      <VideoCard
        videoThumbnail={video.videoThumbnail}
        videoName={video.videoName}
        channelName={video.channelName}
        views={video.views}
        channelThumbnail={video.channelThumbnail}
      />
    );
  }

  // for (const data in videosData) {

  //     console.log(`---data: ${videosData[0].channelName}`);
  //    //
  // }

  return (
    <div className='mainSection'>
      {videosComponents}
      {/* <VideoCard
        videoName='LOTUS - Everything You Need to Know | Up To Speed'
        views='2472719'
        channelName='Donut Media'
        channelImage={require("./content/channels/donut.jpg").default}
        videoImage={require("./content/videos/26-best-games.jpg").default}
      />
      <VideoCard />
      <VideoCard />
      <VideoCard /> */}
    </div>
  );
}

export default MainSection;
