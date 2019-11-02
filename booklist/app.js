// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  // console.log(`book: ${book}`);
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create di
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target) {
  target.parentElement.parentElement.remove();
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get Form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiating a book
  const book = new Book(title, author, isbn);

  // Instantiate a UI object
  const ui = new UI();

  // Validate
  if(title === '' || author ===  '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Success alert
    ui.showAlert('Book added!', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI();

  // Delete book
  if(e.target.className === 'delete') {
    ui.deleteBook(e.target);
    // Show message
  ui.showAlert('Book removed!', 'success');
  }

  e.preventDefault();
});

