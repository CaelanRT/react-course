import { useState } from "react";

// the state value does not synchronously update, when you click the button your displayed
// value will be 1 higher than the one you have stored in your state
// to get it to update, you can pass the previous state into your setState function and you're returning the new state
// your state value
// you must return something otherwise undefined!
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // const handleClick = () => {
  //   setValue((currentState) => {
  //     console.log(currentState);
  //     const newState = currentState + 1;
  //     return newState;
  //   });
  //   console.log(value);
  // };

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default UseStateGotcha;
