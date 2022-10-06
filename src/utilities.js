import React from "react";
import VideoCard from "./components/VideoCard";
import VideoRow from "./components/VideoRow";
import { useParams } from "react-router-dom";

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

const searchForVideo = ({ videosData, searchTerm }) => {
  const lowerCasedSearchTerm = searchTerm.toLowerCase();

  return videosData.filter((video) =>
    video.videoName.toLowerCase().includes(lowerCasedSearchTerm)
  );
};

export const getDataVideoRow = (videosData) => {
  let searchTerm = useParams().searchTerm;
  let videos = searchForVideo({ videosData, searchTerm });
  const videosComponents = [];

  for (let i = 0; i < videos.length; i += 1) {
    const video = videos[i];

    videosComponents.push(
      <VideoRow
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

export const videoIDToEmbed = (videoAddress) => {
  videoAddress = videoAddress.split("?v=");
  let correctAddress = `https://www.youtube.com/embed/${videoAddress[1]}`;
  let result = correctAddress.replace(" ", "");

  return result;
};
