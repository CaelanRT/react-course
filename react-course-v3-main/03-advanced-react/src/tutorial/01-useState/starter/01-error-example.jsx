// this will not increment the total on the screen because it does not trigger a rerender, we need to useState
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
