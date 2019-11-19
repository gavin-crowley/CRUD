import { elements} from './common';
import { Store} from '../models/BookModel';
const store = new Store();
export const clearFormValues = () => {
    elements.title.value = '';
    elements.author.value = '';
}
export const clearResults = () => {
    elements.booklist.innerHTML = '';
}
const renderResult = result => {
    const markUP = `
         <tr>
      <td>${result.title}</td>
       <td>${result.author}</td>
      <td> X  </td>
      <td> Edit  </td>
    </tr>
  `
    elements.booklist.insertAdjacentHTML('beforeend', markUP)
};
export const dataLocalStore = (result) => {
    result.forEach(renderResult);
};
const noResult = () => {
    const noDatamarkUP = `
         <tr>
      <td>No record found.</td>
      <td></td>
       <td></td>
        <td></td>
    </tr>
   `
    elements.booklist.insertAdjacentHTML('beforeend', noDatamarkUP)
};
export const checkDataLocalStorare = () => {
    var items = JSON.parse(window.localStorage.getItem('books'))
    if (items === null || items.length === 0) {
        noResult();
    }
};