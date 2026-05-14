const Person = (props) => {
  const { name, age, image } = props;
  return (
    <>
      <article className="person">
        <img src={image} alt="" />
        <h4>{name}</h4>
        <p>{age}</p>
      </article>
    </>
  );
};
export default Person;
