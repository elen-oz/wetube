const VideoIDToEmbed = (videoAddress) => {
  videoAddress = videoAddress.split("?v=");
  let correctAddress = `https://www.youtube.com/embed/${videoAddress[1]}`;
  let result = correctAddress.replace(' ', '');
  
  return result;
};

export default VideoIDToEmbed;