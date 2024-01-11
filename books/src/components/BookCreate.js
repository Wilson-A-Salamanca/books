import { useState } from "react";

function BookCreate({onCreate}) {
    const [title, setTitle]= useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSumit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return (
        <section className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSumit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}></input>
                <button className="button" >Create</button>
            </form>
        </section>
    )
};

export default BookCreate;