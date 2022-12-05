import {photos} from './photos.js';
import { addOnPhotoClick } from './big-photos.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const element= pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = photo.url;
  element.querySelector('.picture__likes').textContent=photo.likes;
  element.querySelector('.picture__comments').textContent=photo.comments.length;

  addOnPhotoClick(element,photo);
  return element;
};

const renderPhotos = () => {
  photos.forEach((photo) => {
    fragment.appendChild(renderPhoto(photo));
  });
  pictures.appendChild(fragment);
};

renderPhotos();
