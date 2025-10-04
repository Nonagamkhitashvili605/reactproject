import React, { useState } from "react";
import "./App.css";
// import Post from "./Post";
// import { data } from "./data";
// import Modal from "./components/Modal";
// import Profile from "./components/Profile";
// import Greeting from "./assets/Greeting";
// import Header from "./components/Header";
// import Card from "./components/Card";
// import Helloreact from "./components/Helloreact";
// import Satauri from "./components/Satauri";
// import Greeting from "./components/Greeting";
// import User from "./components/User";
import State from "./components/state/State";
import Counter from "./components/Counter";
import PasswordInputWithToggle from "./components/state/PasswordInputWithToggle";
import ColorChanger from "./components/state/ColorChanger";
import TodoApp from "./components/TodoApp";
import { BrowserRouter } from "react-router-dom";

// const arr = [
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
//   { name: "nona", description: "lorem," },
// ];

function App() {
  // const onclick = () => {
  //   console.log("hi");
  // };
  // const type = "list";
  // const arr = ["name", "lastname", "name", "lastname", "name", "lastname"];
  // const arrObj = [
  //   { name: "nona", age: 35 },
  //   { name: "eka", age: 20 },
  //   { name: "giorgi", age: 7 },
  // ];
  return (
    <div>
      {/* <Header />
      <Helloreact />
      <Satauri />
      <Greeting />
      <User /> */}

      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <>
        {/* {arr.map(({ name, description }) => (
          <div style={{ border: "1px solid red", margin: "10px" }}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        ))} */}
      </>
      {/* <Profile isAdmin={true} /> */}
      {/* <Modal header="title" footer="footer">
        <p>text</p>
      </Modal> */}
      {/* <User name="ნინო" />
      <User name="მარი" /> */}

      {/* <h1>nona</h1>
      <button onclick={onclick}>click </button>
      <p>{type} hello react</p>
      {arr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      {arrObj.map(({ name, age }, index) => (
        <h3 key={index}>
          {name}-{age}
        </h3>
      ))} */}

      <State />
      <Counter />
      <PasswordInputWithToggle />
      <ColorChanger />
      <TodoApp />
    </div>
  );
}

export default App;
