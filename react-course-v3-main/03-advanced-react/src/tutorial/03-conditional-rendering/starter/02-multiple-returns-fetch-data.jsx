import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setUser(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }

      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <article>
      <h2>Fetch Data </h2>
      <img src={user.avatar_url} alt="" style={{ maxWidth: "300px" }} />
      <h3>{user.name}</h3>
      <h4>Works at: {user.company}</h4>
      <p>{user.bio}</p>
    </article>
  );
};
export default MultipleReturnsFetchData;
