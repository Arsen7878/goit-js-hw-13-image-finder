export default class ApiService {
  constructor() {
    this.keyword = '';
    this.page = 1;
  }
  async fetchImages() {
    const KEY_API = '23923168-c411bf7922d43bd337dc05fae';

    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.keyword}&page=${this.page}&per_page=12&key=${KEY_API}`;

    const responce = await fetch(URL);

    const dataImage = await responce.json();

    this.increamentPage();

    return dataImage;
  }

  resetPage() {
    this.page = 1;
  }

  increamentPage() {
    this.page += 1;
  }

  get query() {
    return this.keyword;
  }

  set query(newKeyword) {
    this.keyword = newKeyword;
  }
}
