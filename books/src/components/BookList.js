import BookShow from "./BookShow";

function BookList({books, onDelete, onEdit}) {
    const redenredBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>;
    });
    return <div className="book-list">{redenredBooks}</div>
}

export default BookList;