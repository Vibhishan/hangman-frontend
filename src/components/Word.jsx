import React from "react";

export default function Word({ actualWord, playedLetters }) {
  return (
    <div>
      {[...actualWord].map((letter, index) => (
        <React.Fragment key={index}>
          {playedLetters.has(letter) ? (
            <span key={index}>{letter}</span>
          ) : (
            <span>&nbsp;_&nbsp;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
