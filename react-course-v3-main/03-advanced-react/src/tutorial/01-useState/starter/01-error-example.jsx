const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);

    return count;
  };

  return (
    <>
      <h2>The count is: {count}</h2>
      <button onClick={handleClick}>Increase count</button>
    </>
  );
};

export default ErrorExample;
