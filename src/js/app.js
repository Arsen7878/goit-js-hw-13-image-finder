import ApiService from './apiService';
import imagesTpl from '../templates/card-gallery.hbs';

const refs = {
  btnLoadMore: document.querySelector('[data-action="load-more"]'),
  searchform: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
};

const apiService = new ApiService();

refs.searchform.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();

  clearImagesMarkup();

  apiService.query = e.currentTarget.elements.query.value;

  apiService.resetPage();

  const data = await apiService.fetchImages();

  appendImagesMarkup(data.hits);
}

async function onLoadMore() {
  const data = await apiService.fetchImages();

  appendImagesMarkup(data.hits);

  refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function appendImagesMarkup(images) {
  refs.gallery.insertAdjacentHTML('beforeend', imagesTpl(images));
}

function clearImagesMarkup() {
  refs.gallery.innerHTML = '';
}
