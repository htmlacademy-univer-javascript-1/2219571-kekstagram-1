const getRandomNumber = (leftBorder, rightBorder) =>{
  if (leftBorder<0 || rightBorder<0){
    return -1;
  }

  if (leftBorder>rightBorder){
    [leftBorder,rightBorder]=[rightBorder,leftBorder];
  }

  return Math.floor(Math.random()*(rightBorder-leftBorder+1))+leftBorder;
};

const checkStringLength = (str, maxLength) => str.Length>maxLength;

checkStringLength(' ',1);

export {getRandomNumber};
