import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import galleryItems from './gallery-items';

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', markingUp(galleryItems));

new SimpleLightbox('.gallery a');

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
