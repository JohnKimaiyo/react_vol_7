import React from "react";

export default function Event() {
  const testClick = () => {
    alert("click event handler");
  };

  return (
    <div className="App">
      <button onClick={testClick}>Click Me</button>
    </div>
  );
}
