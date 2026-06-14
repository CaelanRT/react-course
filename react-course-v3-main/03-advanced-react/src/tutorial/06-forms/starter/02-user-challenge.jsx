import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, name: name },
    ]);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <>
            <h4 key={user.id}>{user.name}</h4>
            <button
              onClick={() =>
                setUsers(users.filter((innerUser) => user.id !== innerUser.id))
              }
            >
              delete
            </button>
          </>
        );
      })}
    </div>
  );
};
export default UserChallenge;
