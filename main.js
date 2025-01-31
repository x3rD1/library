const myLibrary = [];

const title = document.querySelector('h1');
const author = document.querySelector('h3');
const pages = document.querySelector('h6');

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
}

function addBookToLibrary(title, author, pages) {
    //create a book here and push it in the array.
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayBooks() {
    myLibrary.forEach(items => {//must display each book on the page.
        title.textContent = items.title;
        author.textContent = items.author;
        pages.textContent = items.pages;
    })
}

addBookToLibrary('The Fable', 'Rexx', 12);
displayBooks();