import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [list, setList] = useState(data);

  const handleClick = () => {
    setList([]);
  };

  return (
    // this is a standard way to align elements. have a parent container then set your inner container to align to the parent
    <>
      <main>
        <section className="container">
          <h2>{list.length} Birthdays today!</h2>
          {list.map((person) => {
            return <Person {...person} key={person.id} />;
            console.log(person);
          })}
          <button onClick={handleClick} className="btn">
            clear items
          </button>
        </section>
      </main>
    </>
  );
};
export default App;
