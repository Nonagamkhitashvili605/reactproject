import React from "react";
import { Link, Links } from "react-router-dom";
// import MainPage from "./MainPage";
// import Contact from "./Contact";

const MainPage = () => {
  return (
    <div>
      MainPage
      <Link to={"/contact"}>See contact list </Link>
    </div>
  );
};

export default MainPage;
