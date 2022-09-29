import React from "react";
import "./MainSection.css";
import VideoCard from "./VideoCard";

function MainSection({videosData}) {

  console.log(videosData);
  const videosComponents = [];
  
  for (const data in videosData) {

      console.log(`---data: ${data[0].channelName}`);
     //videosComponents.push(<VideoCard video={video} />);
  }

  return (
    <div className='mainSection'>
      <VideoCard
        videoName='LOTUS - Everything You Need to Know | Up To Speed'
        views='2472719'
        channelName='Donut Media'
        channelImage={require("./content/channels/donut.jpg").default}
        videoImage={require("./content/videos/26-best-games.jpg").default}
      />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default MainSection;
