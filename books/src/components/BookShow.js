import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book , onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSumit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    let content = <h2>{book.title}</h2>;
    if(showEdit) {
        content = <BookEdit onSumit={handleSumit} book={book}/>
    };

    return (
        <section className="book-show">
            <img alt="books" src= {`https://picsum.photos/seed/${book.id}/300/200`}/>
            <article>
                {content}
            </article>
            <article className="actions">
                <button onClick={handleEditClick}>edit</button>
                <button className="delete" onClick={handleDeleteClick}>delete</button>
            </article>           
        </section>
    )
};

export default BookShow;