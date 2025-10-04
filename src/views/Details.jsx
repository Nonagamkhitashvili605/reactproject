import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "./../components/User";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>LOADING</p>;

  return (
    <div style={{ border: "1px solid red", padding: "40px" }}>
      <h1>{data.title}</h1>
      Details
    </div>
  );
};

export default Details;
