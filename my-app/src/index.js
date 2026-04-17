import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// ES6 modules
import { books } from "./books";
import Book from "./Book";

// structure - iterate over the list and for every item return the component!
// set the key prop where you're iterating over the data and set it on what item you're returning
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

// logic of rendering HTML to the screen

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
