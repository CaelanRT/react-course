import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally this is where you connect to the db or api
    setUser({ name: "Billy" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there: {user.name}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please log in</h4>
          <button onClick={login}>Login</button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
