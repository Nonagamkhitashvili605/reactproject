import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <div
        style={{ width: "100px", height: "40px", backgroundColor: "orange" }}
      >
        {" orange"}
      </div>
      <button style={{ backgroundColor: "orange" }}>daachire</button>
      <input type="text" style={{ width: "400px", height: "40px" }} />
    </div>
  );
};

export default Header;
