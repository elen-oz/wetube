const getFormatCheck = (fileName) => {
  if (!(fileName.endsWith(".jpg"))) {
    fileName = `${fileName}.jpg`;
  } 

  return fileName;
};

export default getFormatCheck;
