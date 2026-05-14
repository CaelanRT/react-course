const Person = (props) => {
  const { name, age, image } = props;
  return (
    <>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <h4>{age}</h4>
    </>
  );
};
export default Person;
