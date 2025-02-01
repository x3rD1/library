const myLibrary = [];
const container = document.querySelector('.container')

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
        // Create new elements for each book
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        container.appendChild(newCard);

        const title = document.createElement('h1');
        const author = document.createElement('h3');
        const pages = document.createElement('h6');

        // Set text content for each element
        title.textContent = items.title;
        author.textContent = items.author;
        pages.textContent = items.pages;
        
        // Append each element to the card
        newCard.appendChild(title);
        newCard.appendChild(author);
        newCard.appendChild(pages);
        
    })
}

addBookToLibrary('The Fable', 'Rexx', 12);
addBookToLibrary('The GTO', 'Sarah', 10);
addBookToLibrary('The EnS', 'Ly', 25);
displayBooks();