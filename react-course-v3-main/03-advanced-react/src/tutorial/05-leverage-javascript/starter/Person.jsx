const Person = (props) => {
  const { name, nickName = "ShakeAndBake", images } = props;

  const img = images?.[0]?.small?.url;

  return (
    <>
      <h3>{name}</h3>
      <p>Nickame: {nickName}</p>
      <img src={img} alt={name} />
    </>
  );
};
export default Person;
