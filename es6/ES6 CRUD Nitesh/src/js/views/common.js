export const elements = {
    title: document.getElementById('title'),
    author: document.getElementById('author'),
    formid: document.getElementById('formid'),
    booklist: document.getElementById('book-list'),
    container: document.querySelector('.container'),
    submit: document.querySelector('#submit'),
    cancel: document.querySelector('#cancel'),
    update: document.querySelector('#update')
};
export class UI {
    showAlert(message, className) {
        const alertMarkup = `
            <div class="alert alert-${className}">
    ${message}
  </div>`;
        elements.container.insertAdjacentHTML('afterbegin', alertMarkup);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000)
    }
}

export const elementString = {
    loader:'loader'
}
export const renderLoader = parent =>{
    const loader = `
        <div class="${elementString.loader}">
           <div></div><div></div>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}
export const clearLoader = ()=>{
    const loader = document.querySelector(`.${elementString.loader}`);
    if(loader){

        loader.parentElement.removeChild(loader);
    }
}


