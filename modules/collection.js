const list = document.getElementById('book_list');
const addBook = document.getElementById('addBook');

export default class BookCollection {
  constructor(booksContainer) {
    this.books = [];
    this.booksContainer = booksContainer;
    this.Storage = false;
    this.checkStorage('localStorage');
    this.initData();
    this.books.forEach((book) => this.addToPage(book));
  }

  addToCollection(data) {
    const { id, title, author } = data;
    this.books.push({
      id,
      title,
      author,
    });

    this.uStorage();
    this.addToPage(data);
  }

  addToPage(data) {
    const { id, title, author } = data;

    this.booksContainer.innerHTML += `
    <li id ="${id}">
    <div class="_title">
      <h3>"${title}"</h3>
      </div>
      <div class="_author">
      <p><b><i>By : </b>${author}</i></p>
      </div>
      <button class="rmvBook">Remove</button>
    </li>
    `;

    this.updateEventListeners(this.booksContainer);
  }

  updateEventListeners(element = document) {
    const rmvBtn = element.querySelectorAll('.rmvBook');

    rmvBtn.forEach((_rmBtn) => {
      _rmBtn.addEventListener('click', (e) => {
        const { parentNode } = e.target;
        this.rmvBook(parentNode.id);
        parentNode.remove();
      });
    });
  }

  rmvBook(id) {
    this.books = this.books.filter((book) => book.id === id);
    this.uStorage();
  }

  initData() {
    if (this.Storage) {
      const localData = window.localStorage.getItem('books');
      if (localData) {
        this.books = JSON.parse(localData);
      }
    }
  }

  checkStorage(type) {
    let storage;
    try {
      storage = window[type];
      const st = 'testStorage';
      storage.setItem(st, st);
      storage.rmvItem(st);
      this.Storage = true;
    } catch (e) {
      this.Storage = false;
    }
  }

  uStorage() {
    if (this.Storage) {
      const storage = window.localStorage;
      storage.setItem('books', JSON.stringify(this.books));
    }
  }
}

const bookCollect = new BookCollection(list);

addBook.addEventListener('submit', (e) => {
  e.preventDefault();

  const id = Date.now().toString();
  const title = addBook.title.value.trim();
  const author = addBook.author.value.trim();

  bookCollect.addToCollection({
    id,
    title,
    author,
  });

  addBook.title.value = '';
  addBook.author.value = '';
});
