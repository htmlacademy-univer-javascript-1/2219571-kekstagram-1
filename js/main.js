import {renderPhotos} from './rendered-images.js';
import {sendRequest} from './fetch.js';
import './form.js';
import './validation.js';
import './effects.js';
import './scale.js';

let photos = [];

const onSuccess = (data) => {
  photos=data.slice();
  renderPhotos(photos);
};

const onFail = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.textAlign = 'center';
  messageAlert.style.fontSize = '30px';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.textContent = 'Ошибка загрузки данных';
  document.body.append(messageAlert);
};

sendRequest(onSuccess,onFail,'GET');
