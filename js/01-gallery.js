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
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onClose: () => {
            document.removeEventListener('keydown', onEscClisk);
        },
    }
  );
  instance.show();

  document.addEventListener('keydown', onEscClisk);
  function onEscClisk(event) {
    if (event.keyCode === 27) {
      instance.close();
    }
  }
}
console.log(galleryItems);
