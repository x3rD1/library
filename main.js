const myLibrary = [];
const container = document.querySelector('.container')

// Show dialog modal
const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.header button');
const closeModal = document.querySelector('.close');
const guide = document.querySelector('.guide');
const restoreGuide = guide;
openModal.addEventListener('click', () => {
    guide.remove();
    form.reset();
    modal.showModal();
})
closeModal.addEventListener('click', () => {
    modal.close();
    if (myLibrary.length === 0){
        return main.appendChild(restoreGuide);
    }
})

// Get Title, Author and Pages from the form element
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const form = document.querySelector('form');

// Get Add Book button element
const addBook = document.querySelector('#submit');
addBook.addEventListener('click', () => {
    if(/^[0-9a-zA-Z ]{1,28}$/.test(title.value)
        &&/^[a-zA-Z ]{1,24}$/.test(author.value)
        &&/^[0-9]{1,5}$/.test(pages.value)){
        addBookToLibrary(title.value,author.value,pages.value);
        displayBooks();
    }
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
        if (myLibrary.lastIndexOf(items) === myLibrary.length - 1){
            const newCard = document.createElement('div');
            newCard.classList.add('card');
            container.appendChild(newCard);

            const title = document.createElement('h1');
            const author = document.createElement('h3');
            const pages = document.createElement('h6');

            // Create select element for status
            const select =  document.createElement('select');
            select.classList.add('status');

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

            // Remove card from display
            const removeIcon = document.createElement('i');
            removeIcon.classList.add('fa-solid', 'fa-trash');
            newCard.appendChild(removeIcon);

            removeIcon.addEventListener('click', () => {
                myLibrary.splice(myLibrary.indexOf(items),1);
                container.removeChild(newCard);
                if (myLibrary.length === 0){
                    return main.appendChild(restoreGuide);
                }
            })
        }
    })
}
