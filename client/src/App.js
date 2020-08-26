import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlaylistSearch from "./hooks/PlaylistSearch";
import SongList from "./hooks/SongList";
import PlaylistContext from "./state/PlaylistContext";

function App() {
  const playlistHook = useState([]);

  return (
    <PlaylistContext.Provider value={playlistHook}>
      <div className="App">
        <PlaylistSearch />
        <SongList />
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
    </PlaylistContext.Provider>
  );
}

export default App;
