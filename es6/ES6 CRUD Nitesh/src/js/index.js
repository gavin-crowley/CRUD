import { clearResults, clearFormValues} from './views/BookView';
import { Book, Store} from './models/BookModel';
import { clearLoader, elements, UI, renderLoader} from './views/common'
import { checkDataLocalStorare} from './views/BookView';

var uniqid = require('uniqid');
const book = new Book();
const ui = new UI();
const store = new Store();
document.addEventListener('DOMContentLoaded', store.diplayBooks());
//Add new Book(submit)
elements.submit.addEventListener('click', e => {
    if (elements.title.value === '' || elements.author.value === '') {
        ui.showAlert('All fields are required.', 'danger');
        elements.title.focus();
    } else {
        addBook();
        ui.showAlert('Book Added successfully.', 'success');
    }
    e.preventDefault();
});
//Add new Book
const addBook = () => {
    const title = elements.title.value;
    const author = elements.author.value;
    const book = new Book(title, author, uniqid());
    const store = new Store();
    store.addBooks(book);
    clearFormValues();
    clearResults();
    store.diplayBooks();
}
//Update Book (submit)
elements.update.addEventListener('click', e => {
    if (elements.title.value === '' || elements.author.value === '') {
        ui.showAlert('All fields are required.', 'danger');
        elements.title.focus();
    } else {
        updateBook();
    }
    e.preventDefault();
});
//Add new Book localstorage
const updateBook = () => {
    const updateId = elements.update.getAttribute('data-id');
    store.updateBooks(updateId);
    clearFormValues();
    clearResults();
    store.diplayBooks();
    elements.title.focus();
    ui.showAlert('Book update successfully.', 'success');
}
//Delete Book from localstorage
elements.booklist.addEventListener('click', e => {
    if (e.target.dataset.type === 'delete') {
        store.deleteBook(e.target.id);
        renderLoader(elements.booklist);
        store.diplayBooks();
        clearLoader();
        ui.showAlert('Book deleted successfully.', 'success');
        checkDataLocalStorare();
        e.stopPropagation();
    }
});
//Edit Book from localstorage
elements.booklist.addEventListener('click', e => {
    if (e.target.dataset.type === 'edit') {
        elements.update.setAttribute('data-id', e.target.id)
        store.getEditBook(e.target.id);
        elements.cancel.classList.remove('hide');
        elements.submit.classList.add('hide');
        elements.update.classList.remove('hide');
        e.stopPropagation();
    }
});
//Show hide button from DOM
elements.cancel.addEventListener('click', e => {
    elements.cancel.classList.add('hide');
    elements.submit.classList.remove('hide');
    elements.update.classList.add('hide');
    clearFormValues();
})