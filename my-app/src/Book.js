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

export default Book;
