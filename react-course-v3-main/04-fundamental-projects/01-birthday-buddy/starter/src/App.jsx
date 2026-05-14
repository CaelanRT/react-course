import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [list, setList] = useState(data);
  return (
    <>
      <h2>{list.length} Birthdays today!</h2>
      {list.map((person) => {
        return <Person {...person} key={person.id} />;
        console.log(person);
      })}
    </>
  );
};
export default App;
