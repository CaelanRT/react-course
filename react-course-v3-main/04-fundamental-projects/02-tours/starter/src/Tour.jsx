const Tour = ({ tour }) => {
  const { name, info, image, price } = tour;
  return (
    <>
      <h3>{name}</h3>
      <p>{info}</p>
      <h4>{price}</h4>
      <img src={image} alt="{info}" />
    </>
  );
};
export default Tour;
