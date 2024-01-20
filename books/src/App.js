import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setbooks] = useState([]);

  const editBooksById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle};
      }

      return book;
    });

    setbooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setbooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
    title
    });

    const updatedBooks = [
      ...books,
      response.data
    ]
    setbooks(updatedBooks);
  };

  return (  
    <div>
      <h1>List</h1>
      <BookList onEdit={editBooksById} books={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
