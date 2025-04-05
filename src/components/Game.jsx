import React, { useState } from "react";
import Lives from "./Lives";
import Word from "./Word";
import Letters from "./Letters";
import Start from "./Start";
import { createSession, playInSession } from "../../api/sessions";

const MAX_LIVES = 6;

export default function Game() {
  const [session, setSession] = useState(null);
  const isRunning = !!session;

  const guess = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    setSession(updatedSession);
  };

  const start = async (name) => {
    const session = await createSession(name);
    setSession(session);
  };

  return (
    <div className="game-wrapper">
      {isRunning && (
        <>
          <div className="left-pane">
            <Lives livesLeft={session.livesLeft} />
          </div>
          <div className="right-pane">
            <Word maskedWord={session.maskedWord} />
            <Letters playedLetters={new Set()} onSelect={guess} />
          </div>
        </>
      )}

      <Start onStart={start} isRunning={isRunning} />
    </div>
  );
}
