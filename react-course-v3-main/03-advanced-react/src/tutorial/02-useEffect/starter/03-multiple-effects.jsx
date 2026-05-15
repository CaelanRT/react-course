import { useState, useEffect } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // useEffect is essentially you setting up conditionally what you want to have run based on the dependency array
  // if you want to have it not run anything, leave blank
  // when you update this value passed in, useEffect is called
  // essentially a switch statement if you want to set up things conditionally
  useEffect(() => {
    console.log("hello from first useEffect");
  }, []);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, [secondValue]);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
