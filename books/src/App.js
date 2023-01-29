import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setbooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999), 
        title,
      },
    ]
    setbooks(updatedBooks);
  };

  return (  
    <div>
      <BookList books={books}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
