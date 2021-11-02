import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const createItem = galleryItems
  .map(
    item => `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
             </a>
        </div>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', createItem);

gallery.addEventListener('click', onSelectImage);

function onSelectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src = "${event.target.dataset.source}" />`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscClick);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscClick);
      },
    }
  );

  // instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
  function onEscClick(event) {
    if (event.keyCode === 27) {
      instance.close();
    }
  }
}

console.log(galleryItems);
