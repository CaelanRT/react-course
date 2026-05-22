import { useState } from "react";

const ToggleChallenge = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <SomeComponent />}
    </>
  );
};

const SomeComponent = () => {
  return <h2>Toggled</h2>;
};

export default ToggleChallenge;
