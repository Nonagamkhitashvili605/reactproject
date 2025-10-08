import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import User from "./../components/User";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>LOADING</p>;

  return (
    <div style={{ border: "1px solid red", padding: "40px" }}>
      <h1>
        {id} - {data.name}
      </h1>
      <p>username: {data.username}</p>
      <p>email:{data.email}</p>
      <p>pgone: {data.phone}</p>
      <p>website;{data.website}</p>
      <Link to={"/contact"}> Contacts page</Link>
    </div>
  );
};

export default Details;
