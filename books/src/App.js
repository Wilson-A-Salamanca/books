import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setbooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setbooks(response.data)
  };

  useEffect(() =>{
    fetchBooks()
  },[])

  const editBooksById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data};
      }

      return book;
    });

    setbooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setbooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
    title,
    });

    const updatedBooks = [
      ...books,
      response.data
    ];

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
