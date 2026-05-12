import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  // functions need to be inside the outer function for scope!
  const removeSinglePerson = (id) => {
    // filter is looking for a flag and returns a shallow copy of the array where everything matches!!
    const newPeople = people.filter((person) => person.id !== id);

    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            {/* this is how you send a parameter to another function from the onClick!! */}
            <button onClick={() => removeSinglePerson(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={clearAllItems}>Clear Items</button>
    </div>
  );
};

export default UseStateArray;
