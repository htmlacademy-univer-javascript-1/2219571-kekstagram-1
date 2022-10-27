import { getRandomNumber } from './utils.js';
import {addComments} from './comments.js';


const COUNT_PHOTOS = 25;

const COUNT_COMMENTS = 10;

const DESCRIPTIONS = [
  'С любимыми друзьями:)',
  'А у меня новый маникюр! Оцените!',
  'Не нужно быть важным, важно быть нужным........',
  'Наша поездка в Петербург',
  'Люблю вас, мои подписчики!'
];

const photos=[];

const addPhoto = (id) => ({
  id,
  url: `img/avatar-${id+1}.svg`,
  description: DESCRIPTIONS[getRandomNumber(0,DESCRIPTIONS.length-1)],
  likes: getRandomNumber(15,200),
  comments: Array.from({length : getRandomNumber(1,COUNT_COMMENTS)}).map((_,index) => addComments(index+1))
});

const addPhotos = () => {
  for (let i=0;i<COUNT_PHOTOS;i++){
    photos.push(addPhoto(i));
  }
};

addPhotos();
export{photos};


