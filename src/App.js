import { useEffect, useState } from "react";
import "./App.scss";
import { FormState } from "./components/FormState";
import { Repository } from "./components/Repository";

const API_URL = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (username) {
      fetch(`${API_URL}${username}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setUser(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [username]); //Get user data

  useEffect(() => {
    if (username) {
      fetch(`${API_URL}${username}/repos`)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result[0].html_url);
            setRepos(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [username]); //Get repos data

  const submitForm = (inptValue) => {
    setUsername(inptValue);
  };
  console.log(user, username);
  return (
    <div className="App">
      <FormState submitForm={submitForm} />
      {username ? (
        <Repository user={user} repos={repos} />
      ) : (
        <h2 className="search-heading">Search for Github user...</h2>
      )}
    </div>
  );
}

export default App;
