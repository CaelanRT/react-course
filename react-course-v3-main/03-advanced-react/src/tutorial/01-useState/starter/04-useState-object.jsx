import { useState } from "react";

const UseStateObject = () => {
  // can refactor some of these lines into a state object
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(26);
  // const [hobby, setHobby] = useState("read books");

  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const handleClick = () => {
    setPerson({ name: "john", age: 28, hobby: "scream at computer" });

    // can also shallow copy the person object to modify only 1 value in the object
    // setPerson({ ...person, name: "john" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>Enjoys: {person.hobby}</h4>
      <button onClick={handleClick}>Show John</button>
    </>
  );
};

export default UseStateObject;
