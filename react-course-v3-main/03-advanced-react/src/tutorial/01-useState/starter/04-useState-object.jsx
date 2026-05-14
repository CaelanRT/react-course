import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(26);
  const [hobby, setHobby] = useState("read books");

  const handleClick = () => {
    setName("john");
    setAge("28");
    setHobby("scream at computer");
  };

  return (
    <>
      <h2>useState object example</h2>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>Enjoys: {hobby}</h4>
      <button onClick={handleClick}>Show John</button>
    </>
  );
};

export default UseStateObject;
