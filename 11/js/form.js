import { isEscape } from './utils.js';
import { onFormInput, refreshPrinstine } from './validation.js';
import { setDefaultScale } from './scale.js';
import { setDefaultEffects } from './effects.js';

const imgUploadFileInput=document.querySelector('.img-upload__input');
const form=document.querySelector('.img-upload__form');
const overlay=document.querySelector('.img-upload__overlay');
const closingButton = document.querySelector('#upload-cancel');

const isNoFocus = (evt) => !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description') ;

const onCloseClick = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');


  form.reset();
  imgUploadFileInput.value='';

  refreshPrinstine();
  form.removeEventListener('submit', onFormInput);
  closingButton.removeEventListener('click', onCloseClick);
};

const onEscKeyDown = (evt) => {
  if (isEscape(evt) && isNoFocus(evt)){
    onCloseClick();
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

const onFileInput = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closingButton.addEventListener('click', onCloseClick);
  document.addEventListener('keydown', onEscKeyDown);
  form.addEventListener('submit', onFormInput);

  setDefaultScale();
  setDefaultEffects();
};

imgUploadFileInput.addEventListener('input', onFileInput);

