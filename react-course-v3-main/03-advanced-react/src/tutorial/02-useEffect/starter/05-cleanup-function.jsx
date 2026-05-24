import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2>Cleanup Function</h2>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <SecondComponent />}
    </>
  );
};

// use effect is firing on every click here, use effect is running every time even though the dependency array is empty
// this is because it is rerendering due to conditional rendering
const SecondComponent = () => {
  useEffect(() => {
    console.log("here");
  }, []);

  return <h3>Second component</h3>;
};

export default CleanupFunction;
