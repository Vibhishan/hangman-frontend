import React, { useState } from "react";
import Lives from "./Lives";
import Word from "./Word";
import Letters from "./Letters";
import Start from "./Start";

const MAX_LIVES = 6;

export default function Game() {
  const [actualWord, setActualWord] = useState("");
  const [playedLetters, setPlayedLetters] = useState([]);

  const wordSet = new Set([...actualWord]);
  const playedSet = new Set([...playedLetters]);

  const wrongLetters = playedLetters.filter((letter) => {
    return !wordSet.has(letter);
  });

  const lives = MAX_LIVES - wrongLetters.length;

  const isRunning = Boolean(lives > 0 && actualWord.length > 0);
  const isWon =
    isRunning &&
    [...wordSet].reduce((acc, letter) => {
      if (!playedSet.has(letter)) return false;
      return acc;
    }, true);

  const guess = (letter) => {
    setPlayedLetters((prev) => [...prev, letter]);
  };

  const start = () => {
    setActualWord("house");
    setPlayedLetters([]);
    // isRunning(true);
  };

  return (
    <div>
      {isRunning && (
        <>
          <Lives livesLeft={lives} />
          <Word actualWord={actualWord} playedLetters={playedSet} />
          <Letters playedLetters={playedSet} onSelect={guess} />
        </>
      )}

      <Start onStart={start} />

      {isWon && (
        <div>
          <h1>You won!</h1>
          <p>The word was: {actualWord}</p>
        </div>
      )}
    </div>
  );
}
