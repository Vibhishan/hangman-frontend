import React from "react";

export default function Word({ maskedWord }) {
  return (
    <div className="display-flex justify-around word-flex">
      {maskedWord.map((letter, index) => (
        <React.Fragment key={index}>
          <div key={index} className="word">
            {letter}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
