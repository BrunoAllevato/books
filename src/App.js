import BookCreate from './components/BookCreate';
// import BookList from './components/BookList';
import {useState} from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [...books, {id: 123, title}];
    setBooks(updatedBooks);
    // console.log('Need to add book with:', title);
    // setBooks(title);
  };


  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
      {/* <BookList /> */}
    </div>
  );
};

export default App;
