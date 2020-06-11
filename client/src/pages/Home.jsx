import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Home</h1>

      <nav>
        <Link to="/play">Play</Link>
        <Link to="/scoreboard">ScoreBoard</Link>
        <Link to="/help">Help</Link>
      </nav>
    </div>
  );
}

export default App;
