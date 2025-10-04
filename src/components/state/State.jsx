import React, { useEffect, useState } from "react";
// import { Data } from "./data";
import { data } from "./../../data";
const State = () => {
  const [state, setState] = useState(5);
  const [boolean, setBoolean] = useState(true);
  const [info, setInfo] = useState(data);
  const [infotext, setInfotext] = useState("");
  const [InfoEmail, setInfoEmail] = useState("");
  const [isClicked, setIsClicked] = useState("false");

  const click = () => {
    // setState("hhhhh");
    // state == 5 ? setState("ndhdh") : setState(5);
    // setBoolean(!boolean);
    setInfo(
      info.filter((item) => {
        return item.id % 2 == 0;
      })
    );
  };

  const onClick = (e) => {
    setInfotext(e.target.value);
  };
  const emailChange = (e) => {
    setInfoEmail(e.target.value);
  };

  const button = () => {
    setIsClicked(true);
  };

  // useEffect(() => {
  //   // localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify({ name: "nino" }));
  // }, []);
  // sessionStorage.setItem("SESSION", "new session value");

  return (
    <div>
      {state}
      <button onClick={click}>click</button>
      {boolean == true ? <p>ჭეშმარიტი</p> : <p>მცდარი</p>}
      <button onClick={click}>filter</button>
      {info.map((item, key) => (
        <p key={key}>{item.title}</p>
      ))}
      <button onClick={button}>click</button>
      {isClicked && (
        <p>
          {infotext}---------- {InfoEmail}{" "}
        </p>
      )}
      <form>
        <input
          type="text"
          onChange={onClick}
          placeholder="write some text"
          value={infotext}
        />
        <input
          type="email"
          onChange={emailChange}
          placeholder="write some email"
          value={InfoEmail}
        />
      </form>
    </div>
  );
};

export default State;
