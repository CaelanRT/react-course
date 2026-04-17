import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const firstBook = {
//   author: "Andy Weir",
//   title: "Project Hail Mary",
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/91ENQs2KLAL._AC_UL600_SR600,400_.jpg",
//   alt: "Project Hail Mary",
// };

// const secondBook = {
//   author: "Freida McFadden",
//   title: "The Dinner Party",
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/71LtTkRdVzL._AC_UL600_SR600,400_.jpg",
//   alt: "The Dinner Party",
// };

const books = [
  {
    author: "Andy Weir",
    title: "Project Hail Mary",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91ENQs2KLAL._AC_UL600_SR600,400_.jpg",
    alt: "Project Hail Mary",
    id: 1,
  },
  {
    author: "Freida McFadden",
    title: "The Dinner Party",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71LtTkRdVzL._AC_UL600_SR600,400_.jpg",
    alt: "The Dinner Party",
    id: 2,
  },
];

// structure - iterate over the list and for every item return the component!
// set the key prop where you're iterating over the data and set it on what item you're returning
const BookList = () => {
  const getBook = (id) => {
    const found = books.find((book) => book.id === id);
    console.log(found.id);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

// logic of rendering HTML to the screen
const Book = (props) => {
  const { image, alt, title, author, getBook, id } = props;

  return (
    <article className="book">
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>
      <h4>{author.toUpperCase()}</h4>
      {props.children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
