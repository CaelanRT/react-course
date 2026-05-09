const Title = (props) => {
  const { firstText, secondText } = props;
  return (
    <div className="section-title">
      <h2>
        {firstText} <span>{secondText}</span>
      </h2>
    </div>
  );
};
export default Title;
