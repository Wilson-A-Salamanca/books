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
        <section>
            <article>
                {content}
            </article>
            <article>
                <button onClick={handleEditClick}>edit</button>
                <button onClick={handleDeleteClick}>delete</button>
            </article>           
        </section>
    )
};

export default BookShow;