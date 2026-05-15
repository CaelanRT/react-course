import { useState, useEffect } from "react";

// functions declared in the body of a component are invoked on every re-render
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  // cannot make useEffect async, you can create a function inside of useEffect that is async but just don't make
  // the callback inside the useEffect invocation async
  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
