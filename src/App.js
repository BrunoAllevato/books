import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useState} from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle};
      };
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {id: Math.round(Math.random() * 9999), title}
    ];
    setBooks(updatedBooks);
    // console.log('Need to add book with:', title);
    // setBooks(title);
  };

  return (
    <div className="app">
      {/* {books.length} */}
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
    </div>
  );
};

export default App;
