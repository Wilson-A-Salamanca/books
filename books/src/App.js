import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setbooks] = useState([]);

  return (
    <div>
      <BookCreate />
    </div>
  );
}

export default App;
