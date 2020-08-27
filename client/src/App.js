import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlaylistContext from "./state/PlaylistContext";
import Player from "./hooks/Player";
import PlayerContext from "./state/PlayerContext";

function App() {
  const playlistHook = useState([]);
  const playerHook = useState({});

  return (
    <PlaylistContext.Provider value={playlistHook}>
      <PlayerContext.Provider value={playerHook}>
        <div className="App">
          <Player />
        </div>
      </PlayerContext.Provider>
    </PlaylistContext.Provider>
  );
}

export default App;
