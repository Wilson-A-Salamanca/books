import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setbooks] = useState([]);

  const createBook = (title) => {
    //prueba
    setbooks(title);
  };

  return (  
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
