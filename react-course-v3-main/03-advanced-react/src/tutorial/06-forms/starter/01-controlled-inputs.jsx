import { useState } from "react";

const ControlledInputs = () => {
  // were essentially trying to save whatever gets typed into state, and then when you need to post things you send it to server by grabbing
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleChange = (e) => {

  //   setName(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is where you do something to with the values? send to server
    console.log(name, email);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          {/* need to set up the value for the state value and on change otherwise it won't work */}
          <input
            type="text"
            name=""
            id="name"
            className="form-input"
            value={name}
            // can use handleChange just as is here
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            name=""
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
};
export default ControlledInputs;
