import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchRamdonData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      // handle success
      console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
};

export default function App() {
  const [counter, updateCounter] = useState(0);

  const [randomUserDataJSON, setRamdomUserDataJSON] = useState("");

  useEffect(() => {
    fetchRamdonData().then((randomData) => {
      setRamdomUserDataJSON(randomData || "no user data found");
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          updateCounter(counter + 1);
        }}
      >
        increase counter
      </button>
      <p>{randomUserDataJSON}</p>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
