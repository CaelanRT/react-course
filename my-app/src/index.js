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
  },
  {
    author: "Freida McFadden",
    title: "The Dinner Party",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71LtTkRdVzL._AC_UL600_SR600,400_.jpg",
    alt: "The Dinner Party",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book
            image={book.image}
            title={book.title}
            author={book.author}
            alt={book.alt}
          />
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { image, alt, title, author } = props;

  return (
    <article className="book">
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {props.children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
