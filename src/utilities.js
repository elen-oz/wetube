export const getFormatCheck = (fileName) => {
  if (!(fileName.endsWith(".jpg"))) {
    fileName = `${fileName}.jpg`;
  } 

  return fileName;
};

export const VideoIDToEmbed = (videoAddress) => {
  videoAddress = videoAddress.split("?v=");
  let correctAddress = `https://www.youtube.com/embed/${videoAddress[1]}`;
  let result = correctAddress.replace(' ', '');
  
  return result;
};


export const SearchForVideo = ({ videosData, searchTerm }) => {
  const lowerCasedSearchTerm = searchTerm.toLowerCase();

  return videosData.filter((video) => 
    video.videoName.toLowerCase().includes(lowerCasedSearchTerm)
  )
};
