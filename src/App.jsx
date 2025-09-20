// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// // import Post from "./Post";
// // import { data } from "./data";
// import Modal from "./components/Modal";
// import Profile from "./components/Profile";
// import Greeting from "./assets/Greeting";
import Modal from "./components/Modal";
function app() {
  return (
    <div>
      {/* <Profile isAdmin={true} />; */}
      <Modal header="title" footer="footer">
        <p>text</p>
      </Modal>
      ;
    </div>
  );
}

export default app;
