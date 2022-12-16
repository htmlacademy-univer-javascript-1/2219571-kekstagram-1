const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const uploadForm=document.querySelector('.img-upload');
const fileChooser=uploadForm.querySelector('.img-upload__input[type=file]');
const preview=uploadForm.querySelector('.img-upload__preview img');
const effectsPreview=uploadForm.querySelectorAll('.effects__preview');

const onFileChooserChange = () => {
  const file=fileChooser.files[0];
  const fileName=file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const pictureURL=URL.createObjectURL(file);
    preview.src = pictureURL;
    effectsPreview.forEach((effect) => {effect.style.backgroundImage = `url(${pictureURL})`;});
  }
};

fileChooser.addEventListener('change',onFileChooserChange);
