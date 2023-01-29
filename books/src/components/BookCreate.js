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
        <section>
            <form onSubmit={handleSumit}>
                <label>Title</label>
                <input value={title} onChange={handleChange}></input>
                <button>Create</button>
            </form>
        </section>
    )
};

export default BookCreate;