const Book = (props) => {
  const { image, alt, title, author, number } = props;

  return (
    <article className="book">
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`#${number + 1}`}</span>
      {props.children}
    </article>
  );
};

export default Book;
