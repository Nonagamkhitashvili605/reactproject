import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./Post";
import { data } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {data.map(({ userId, id, title, body }) => (
        <Post userId={userId} id={id} title={title} body={body} />
      ))}
    </>
  );
}

export default App;
