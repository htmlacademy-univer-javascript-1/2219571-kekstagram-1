const getRandomNumber = (leftBorder, rightBorder) =>{
  if (leftBorder<0 || rightBorder<0){
    return -1;
  }

  if (leftBorder>rightBorder){
    [leftBorder,rightBorder]=[rightBorder,leftBorder];
  }

  return Math.floor(Math.random()*(rightBorder-leftBorder+1))+leftBorder;
};

const isEscape = (evt) => evt.key === 'Escape';

export {getRandomNumber, isEscape};
