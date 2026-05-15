import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      <h4>Github Users</h4>
      {users.map((user) => {
        const { login, avatar_url, html_url, id } = user;
        return (
          <div key={id}>
            <img src={avatar_url} alt="" style={{ width: "200px" }} />
            <p>{login}</p>
            <a href={html_url}>Profile</a>
          </div>
        );
      })}
    </>
  );
};
export default FetchData;
