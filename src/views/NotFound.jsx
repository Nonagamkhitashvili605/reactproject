import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <h1>NotFound</h1>
      <p>u will be redirected 3 seconds</p>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default NotFound;
