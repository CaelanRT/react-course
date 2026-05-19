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

  // you need to have this at the end because javascript is sequential this hasn't happened yet if you threw it up before the user is set and made not null
  const { avatar_url, name, company, bio } = user;

  return (
    <article>
      <h2>Fetch Data </h2>
      <img src={avatar_url} alt="" style={{ maxWidth: "300px" }} />
      <h3>{name}</h3>
      <h4>Works at: {company}</h4>
      <p>{bio}</p>
    </article>
  );
};
export default MultipleReturnsFetchData;
