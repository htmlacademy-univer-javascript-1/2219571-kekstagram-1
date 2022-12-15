const DELAY = 500;

const getRandomNumber = (leftBorder, rightBorder) =>{
  if (leftBorder<0 || rightBorder<0){
    return -1;
  }

  if (leftBorder>rightBorder){
    [leftBorder,rightBorder]=[rightBorder,leftBorder];
  }

  return Math.floor(Math.random()*(rightBorder-leftBorder+1))+leftBorder;
};

const getRandomElements = (elements, randomElementsCount) => {
  const elementNumbers = [];
  const randomElements = [];
  for(let i = 0; i < elements.length; i++){
    const number = getRandomNumber(0, elements.length - 1);
    if(elementNumbers.indexOf(number) === -1){
      randomElements.push(elements[number]);
      elementNumbers.push(number);
    }
    if(randomElements.length === randomElementsCount){
      break;
    }
  }
  return randomElements;
};

const isEscape = (evt) => evt.key === 'Escape';

const debounce = (cb) => {
  let lastTimeout=null;
  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout=window.setTimeout(() => {
      cb(...args);
    }, DELAY);
  };
};

export {getRandomNumber, isEscape, debounce, getRandomElements};
