import "./App.css";
import React, { useState } from "react";

function App() {
  const [gamestate, useGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
    </div>
  );
}

export default App;
