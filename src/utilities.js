import React from "react";
import VideoCard from "./components/VideoCard";

export const getDataVideoCard = (videosData) => {
  const videosComponents = [];

  for (let i = 0; i < videosData.length; i += 1) {
    const video = videosData[i];

    videosComponents.push(
      <VideoCard
        id={video.id}
        videoId={video.videoId}
        videoThumbnail={video.videoThumbnail}
        videoName={video.videoName}
        channelName={video.channelName}
        views={video.views}
        channelThumbnail={video.channelThumbnail}
      />
    );
  }

  return videosComponents;
};

export const getFormatCheck = (fileName) => {
  if (!fileName.endsWith(".jpg")) {
    fileName = `${fileName}.jpg`;
  }

  return fileName;
};

export const VideoIDToEmbed = (videoAddress) => {
  videoAddress = videoAddress.split("?v=");
  let correctAddress = `https://www.youtube.com/embed/${videoAddress[1]}`;
  let result = correctAddress.replace(" ", "");

  return result;
};

export const SearchForVideo = ({ videosData, searchTerm }) => {
  const lowerCasedSearchTerm = searchTerm.toLowerCase();

  return videosData.filter((video) =>
    video.videoName.toLowerCase().includes(lowerCasedSearchTerm)
  );
};
