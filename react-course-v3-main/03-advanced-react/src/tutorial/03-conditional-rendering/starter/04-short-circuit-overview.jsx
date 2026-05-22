import { useState } from "react";

const ShortCircuitOverview = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("susan");

  return (
    <>
      <div>
        <h4>Falsy OR : {first || "hello world"}</h4>
        <h4>Falsy AND : {first && "hello world"}</h4>
        <h4>Truly OR : {second || "hello world"}</h4>
        <h4>Truthy AND : {second && "hello world"}</h4>
      </div>
    </>
  );
};
export default ShortCircuitOverview;
