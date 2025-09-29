import React, { useState } from "react";

function ColorChanger() {
  const [currentColor, setCurrentColor] = useState("red"); // Initial color

  const handleClick = () => {
    switch (currentColor) {
      case "red":
        setCurrentColor("green");
        break;
      case "green":
        setCurrentColor("blue");
        break;
      case "blue":
        setCurrentColor("red");
        break;
      default:
        setCurrentColor("red"); // Fallback
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: currentColor,
          margin: "20px",
          border: "1px solid black",
        }}
      ></div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default ColorChanger;
