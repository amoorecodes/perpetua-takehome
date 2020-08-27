import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlaylistSearch from "./hooks/PlaylistSearch";
import SongList from "./hooks/SongList";
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
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header> */}
        </div>
      </PlayerContext.Provider>
    </PlaylistContext.Provider>
  );
}

export default App;
