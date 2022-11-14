const bigPicture = document.querySelector('.big-picture');

const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const comments = bigPicture.querySelector('.social__comments');

const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const commentTemplate=bigPicture.querySelector('.social__comment');

const createComment = (comment, template) => {
  const newComment = template.cloneNode(true);

  const avatar = newComment.querySelector('img');
  const text = newComment.querySelector('p');

  avatar.src=comment.avatar;
  avatar.alt=comment.name;
  text.textContent=comment.message;
  return newComment;
};

const closingButton = bigPicture.querySelector('.big-picture__cancel');
closingButton.addEventListener('click',() => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

const onEscKeyDown = (evt) => {
  if (evt.key==='Escape')
  {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

const addOnPhotoClick = (image, photo) =>{
  image.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPictureImg.querySelector('img').src=photo.url;
    likesCount.textContent=photo.likes;
    commentsCount.textContent=photo.comments.length;
    socialCaption.textContent=photo.description;

    comments.innerHTML='';

    photo.comments.forEach((comment) => {
      comments.appendChild(createComment(comment,commentTemplate));
    });

    socialCommentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onEscKeyDown);
  });
};

export {addOnPhotoClick};

