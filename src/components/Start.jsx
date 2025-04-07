import React from "react";

export default function Start({ onStart, isRunning }) {
  const [value, setValue] = React.useState();

  return (
    <div className={`start-page ${isRunning ? "display-none" : ""}`}>
      <header className="start-navbar">
        <div className="navbar-title">
          Hangman - <span className="developer-title">by VR</span>
        </div>
        <a href="https://github.com/Vibhishan/hangman-frontend" target="_blank">
          <button className="repo-button">View Repository</button>
        </a>
      </header>

      <main className="start-main-content">
        <div className="main-left-pane">
          <h2>Welcome!</h2>
          <p>
            Test your word-guessing skills with this classic game of Hangman!
            Guess the hidden word by suggesting letters, but be careful - every
            wrong guess brings you closer to a hangman's fate. Play the timeless
            brain-teaser and see how many words you can guess correctly!
          </p>
          <p>
            To get started, enter your name and click the "Start" button. You
            will be taken to the game screen where you can start guessing
            letters.
          </p>
        </div>
        <div className="main-right-pane">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Enter your name"
            className="input"
          />
          <button className="start-button" onClick={() => onStart(value)}>
            Start
          </button>
        </div>
      </main>

      <footer className="start-footer">
        Designed and developed by{" "}
        <a className="footer-link" href="">
          Vibhishan Ranga
        </a>
      </footer>
    </div>
  );
}
