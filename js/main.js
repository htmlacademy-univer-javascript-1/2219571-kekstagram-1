
const COUNT_PHOTOS = 25;

const COUNT_COMMENTS=10;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Виктория',
  'Евгений',
  'Лариса',
  'Геннадий',
];

const DESCRIPTIONS = [
  'С любимыми друзьями:)',
  'А у меня новый маникюр! Оцените!',
  'Не нужно быть важным, важно быть нужным........',
  'Наша поездка в Петербург',
  'Люблю вас, мои подписчики!'
];

const getRandomNumber = (leftBorder, rightBorder) =>{
  if (leftBorder<0 || rightBorder<0){
    return -1;
  }

  if (leftBorder>rightBorder){
    [leftBorder,rightBorder]=[rightBorder,leftBorder];
  }

  return Math.floor(Math.random()*(rightBorder-leftBorder+1))+leftBorder;
};


const photos=[];

const addComments = (id) => ({
  id,
  avatar : `img/avatar-${getRandomNumber(1,6)}.svg`,
  message : MESSAGES[getRandomNumber(0,MESSAGES.length-1)],
  name: NAMES[getRandomNumber(0, NAMES.length-1)],
});

const addPhoto = (id) => ({
  id: id,
  url: `img/avatar-${id+1}.svg`,
  description: DESCRIPTIONS[getRandomNumber(0,DESCRIPTIONS.length-1)],
  likes: getRandomNumber(15,200),
  comments: Array.from({length : getRandomNumber(1,COUNT_COMMENTS)}).map((element,index) => addComments(index+1)),
});

const addPhotos = () => {
  for (let i=0;i<COUNT_PHOTOS;i++){
    photos.push(addPhoto(i));
  }
};

addPhotos();

export {photos};
