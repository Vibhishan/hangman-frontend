import React from "react";

export default function Word({ actualWord, playedLetters }) {
  return (
    <div className="display-flex justify-around word-flex">
      {[...actualWord].map((letter, index) => (
        <React.Fragment key={index}>
          {playedLetters.has(letter) ? (
            <div key={index} className="word">
              {letter}
            </div>
          ) : (
            <div className="word">&nbsp;_&nbsp;</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
