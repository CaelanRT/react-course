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
// write a cleanup function, essentially just cleaning up the functionality you're using
// if you're subscribing to a service in useEffect, you want to unsubscribe in your cleanup
const SecondComponent = () => {
  useEffect(() => {
    console.log("here");
    setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    return () => {};
  }, []);

  return <h3>Second component</h3>;
};

export default CleanupFunction;
