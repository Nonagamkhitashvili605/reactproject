import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>loading</p>;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <h1>CONTACT LIST</h1>
      {data.map(({ name, id }) => (
        <div
          key={id}
          style={{
            border: "1px solid purple",
            marginBottom: "20px",
            width: "200px",
            height: "200px",
          }}
        >
          <p>
            {id}-{name}
          </p>
          <Link to={`/${id}`} onClick={onclick}>
            <button>view more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Contact;
