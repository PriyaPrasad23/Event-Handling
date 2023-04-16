import React, { useState } from "react";

function App() {
  const [heading, change] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handelMouseOver() {
    setMouseOver(true);
  }

  function handelMouseOut() {
    setMouseOver(false);
  }
  function textChange() {
    change("Submitted");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={textChange}
        onMouseOver={handelMouseOver}
        onMouseOut={handelMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
