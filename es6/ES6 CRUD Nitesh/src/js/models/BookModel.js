import { elements} from '../views/common';
import { clearResults, dataLocalStore, checkDataLocalStorare} from '../views/BookView';
export class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
}
export class Store {
    getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    addBooks(book) {
        const books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    diplayBooks() {
        elements.update.classList.add('hide');
        const books = this.getBooks();
        dataLocalStore(books);
        elements.cancel.classList.add('hide');
        checkDataLocalStorare();
    }
    deleteBook(id) {
        const books = this.getBooks();
        books.forEach(function(book, index) {
            if (book.id === id) {
                books.splice(index, 1);
            }
        })
        clearResults();
        localStorage.setItem('books', JSON.stringify(books));
    }
    updateBooks(id) {
        const books = this.getBooks();
        books.forEach(function(book) {
            if (book.id === id) {
                book.title = elements.title.value;
                book.author = elements.author.value;
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
    getEditBook(id) {
        const books = this.getBooks();
        books.forEach(function(book, index) {
            if (book.id === id) {
                elements.author.value = book.author;
                elements.title.value = book.title;
            }
        })

    }
}