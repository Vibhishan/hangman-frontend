import React from "react";

const ALL_ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({ playedLetters, onSelect }) {
  return (
    <div>
      {ALL_ALPHABET.map((alphabet) => (
        <button
          key={alphabet}
          onClick={() => onSelect(alphabet)}
          disabled={playedLetters.has(alphabet)}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
