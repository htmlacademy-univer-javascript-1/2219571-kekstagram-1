import {  debounce, getRandomElements } from './utils.js';
import { renderPhotos, clearPhotos } from './rendered-images.js';
import {getPhotos} from './main.js';

const RANDOM_PHOTOS_COUNT = 10;

const filterForm = document.querySelector('.img-filters__form');
const filters = {
  'filter-default': () => getPhotos().slice(),
  'filter-random': () => getRandomElements(getPhotos(), RANDOM_PHOTOS_COUNT),
  'filter-discussed': () => getPhotos().slice().sort((photo1, photo2) => photo2.comments.length - photo1.comments.length),
};

const onFilterFormClick = debounce((evt) => {
  if(evt.target.tagName === 'BUTTON') {
    const selectedButton = filterForm.querySelector('.img-filters__button--active');

    if(selectedButton){
      selectedButton.classList.remove('img-filters__button--active');
    }

    evt.target.classList.add('img-filters__button--active');

    clearPhotos();
    renderPhotos(filters[evt.target.id]());
  }
});

filterForm.addEventListener('click', onFilterFormClick);
