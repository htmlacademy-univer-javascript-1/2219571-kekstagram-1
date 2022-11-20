import { isEscape } from './utils.js';

const COMMENTS_STEP = 5;
const bigPicture = document.querySelector('.big-picture');

const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const comments = bigPicture.querySelector('.social__comments');

const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const commentTemplate=bigPicture.querySelector('.social__comment');

let visibleComments=[];
let indexVisibleComments=COMMENTS_STEP;


const createComment = (comment, template) => {
  const newComment = template.cloneNode(true);

  const avatar = newComment.querySelector('img');
  const text = newComment.querySelector('p');

  avatar.src=comment.avatar;
  avatar.alt=comment.name;
  text.textContent=comment.message;
  return newComment;
};

const addComments = () =>{
  comments.innerHTML='';

  if (indexVisibleComments>=visibleComments.length){
    indexVisibleComments=visibleComments.length;
    commentsLoader.classList.add('hidden');
  }
  else if(visibleComments.length<=COMMENTS_STEP){
    commentsLoader.classList.add('hidden');
  }
  else{
    commentsLoader.classList.remove('hidden');
  }

  const addedComments=visibleComments.slice(0, indexVisibleComments);
  socialCommentsCount.textContent=`${indexVisibleComments} из ${visibleComments.length} комментариев`;

  addedComments.forEach((comment) => {
    comments.appendChild(createComment(comment, commentTemplate));
  });
};

const onLoarerClick = () => {
  indexVisibleComments += COMMENTS_STEP;
  addComments();
};

const closePhoto = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  visibleComments=[];
  indexVisibleComments=COMMENTS_STEP;
  commentsLoader.removeEventListener('click', onLoarerClick);
};

const closingButton = bigPicture.querySelector('.big-picture__cancel');

const onClosingButtonClick =() => {
  closePhoto();
  closingButton.removeEventListener('click',onClosingButtonClick);
};

const onEscKeyDown = (evt) => {
  if (isEscape(evt))
  {
    closePhoto();
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

const addOnPhotoClick = (image, photo) =>{
  image.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    socialCommentsCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    document.body.classList.add('modal-open');

    bigPictureImg.querySelector('img').src=photo.url;
    likesCount.textContent=photo.likes;
    socialCaption.textContent=photo.description;
    visibleComments=photo.comments;
    addComments();

    commentsLoader.addEventListener('click', onLoarerClick);
    document.addEventListener('keydown', onEscKeyDown);
    closingButton.addEventListener('click', onClosingButtonClick);
  });
};

export {addOnPhotoClick};

