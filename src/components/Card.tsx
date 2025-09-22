import React from "react";

const Card = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <img
        src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F73b4fd5b-64a4-411a-b24d-3ba0c53d0bbf_Thumb.jpeg&w=384&q=50"
        alt="card"
      />
      <h3>Iphone</h3>
      <button onClick={handleClick}>იყიდე</button>
      <button>დაამატე კალათაში</button>
    </div>
  );
};

export default Card;
