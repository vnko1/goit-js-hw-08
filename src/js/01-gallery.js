// Add imports above this line
import galleryItems from './gallery-items';
// Change code below this line

const container = document.querySelector('.gallery');

function markingUp(gallery) {
  return gallery.reduce((acc, { preview, original, description }) => {
    acc += `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    return acc;
  }, '');
}

container.insertAdjacentHTML('beforeend', markingUp(galleryItems));
