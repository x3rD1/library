const myLibrary = [];
const container = document.querySelector('.container')

// Show dialog modal
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.header button');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.showModal();
})
closeModal.addEventListener('click', () => {
    modal.close();
})

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

        // Create select element for status
        const select =  document.createElement('select');
        select.id = 'status';

        // Define the options in an array of objects
        const options = [
            {value: 'status', text: '--Status--'},
            {value: 'reading', text: 'Reading'},
            {value: 'on-hold', text: 'On-Hold'},
            {value: 'completed', text: 'Completed'},
        ]

        //Loop through the array and create <option> elements
        options.forEach(items => {
            const option = document.createElement('option');
            option.value = items.value;
            option.textContent = items.text;
            select.appendChild(option);
        })
        // Set text content for each element
        title.textContent = items.title;
        author.textContent = items.author;
        pages.textContent = items.pages;
        
        // Append each element to the card
        newCard.appendChild(title);
        newCard.appendChild(author);
        newCard.appendChild(select);
        newCard.appendChild(pages);
        
    })
}



addBookToLibrary('The Fable', 'Rexx', 12);
addBookToLibrary('The GTO', 'Sarah', 10);
addBookToLibrary('The EnS', 'Ly', 25);
displayBooks();