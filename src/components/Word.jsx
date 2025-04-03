import React from "react";

export default function Word({ actualWord, playedLetters }) {
  console.log(actualWord);
  console.log(typeof actualWord);
  console.log(playedLetters);
  return (
    <div>
      {[...actualWord].map((letter, index) => (
        <React.Fragment key={index}>
          {console.log(letter)}
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
