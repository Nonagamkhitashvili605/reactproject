import React, { useState } from "react";
import {
  Link,
  Links,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

const MainPage = () => {
  const [val, setVal] = useState("");
  const Navigate = useNavigate();
  const [error, setError] = useState(null);
  // const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hi");
    if (val === "ADMIN") {
      Navigate("/admin");
      setError(null);
    } else {
      setError("please input correct admin key");
    }
  };

  // if (location.pathname == "/") return <p>slash in the pathname</p>;
  return (
    <div>
      <h2>LOGIN FORM</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", msFlexDirection: "column", gap: "20px" }}
      >
        <label htmlFor="admin">ADMIN KEY </label>
        <input
          type="text"
          placeholder="enter admin key"
          id="admin"
          val={val}
          onChange={(e) => setVal(e.target.value)}
          name="admin"
        />
        <button type="submit">Sign in</button>
      </form>
      {error && <h6 style={{ color: "red" }}>{error}</h6>}
      <Link to={"/contact"}>See contact list </Link>
    </div>
  );
};

export default MainPage;
