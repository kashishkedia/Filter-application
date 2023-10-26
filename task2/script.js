// Sample array of book objects
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction', rating: 4.5 },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Fantasy', rating: 4.2 },
    { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Fiction', rating: 3.8 },
    { id: 4, title: 'Book 4', author: 'Author 4', genre: 'Sci-Fi', rating: 4.9 },
    { id: 5, title: 'Book 5', author: 'Author 5', genre: 'Mystery', rating: 4.6 },
    { id: 6, title: 'Book 6', author: 'Author 6', genre: 'Romance', rating: 4.0 },
    { id: 7, title: 'Book 7', author: 'Author 7', genre: 'Sci-Fi', rating: 3.5 },
    { id: 8, title: 'Book 8', author: 'Author 8', genre: 'Fantasy', rating: 4.8 },
    { id: 9, title: 'Book 9', author: 'Author 9', genre: 'Fiction', rating: 3.3 },
    { id: 10, title: 'Book 10', author: 'Author 10', genre: 'Mystery', rating: 3.9 }
  ];
  // Function to create a single row in the table
  function createTableRow(book) {
    return `<tr>
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.rating}</td>
    </tr>`;
  }
  
  // Function to populate the table with data using Array.map()
  function populateTable(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = data.map(createTableRow).join('');
  }
  
  // Function to filter data based on the condition using Array.filter()
  function filterData(data, property, condition) {
    return data.filter(book => book[property] > condition);
  }
  
  // Function to show all books
  function showAllBooks() {
    populateTable(books);
  }
  
  // Function to show filtered books
  function showFilteredBooks() {
    const filterConditionElement = document.getElementById('filterCondition');
    const property = filterConditionElement.value;
    const condition = parseFloat(prompt(`Enter the ${property} condition:`));
  
    if (isNaN(condition)) {
      alert('Invalid condition. Please enter a valid number.');
      return;
    }
  
    const filteredData = filterData(books, property, condition);
    populateTable(filteredData);
  }
  
  // Initial population of the table with filtered data
  showAllBooks();