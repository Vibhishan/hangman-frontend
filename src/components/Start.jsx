import React from "react";

export default function Start({ onStart, isRunning }) {
  const [value, setValue] = React.useState();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter your name"
        className={`input ${isRunning ? "display-none" : ""}`}
      />
      <button
        className={`start-button ${isRunning ? "display-none" : ""}`}
        onClick={() => onStart(name)}
      >
        Start
      </button>
    </div>
  );
}
