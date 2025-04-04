import React from "react";

const ALL_ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({ playedLetters, onSelect }) {
  return (
    <div className="display-flex justify-center">
      {ALL_ALPHABET.map((alphabet) => (
        <button
          key={alphabet}
          onClick={() => onSelect(alphabet)}
          disabled={playedLetters.has(alphabet)}
          className="letter-button letter-button--letters"
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
