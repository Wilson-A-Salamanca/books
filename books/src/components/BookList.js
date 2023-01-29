import BookShow from "./BookShow";

function BookList({books}) {
    const redenredBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>;
    });
    return <div>{redenredBooks}</div>
}

export default BookList;