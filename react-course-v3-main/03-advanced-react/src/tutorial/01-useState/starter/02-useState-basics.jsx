import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  // can access the initial value and function you set
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];

  // console.log(value);

  // doing it here with array destructuring in one line!
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4> You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default UseStateBasics;
