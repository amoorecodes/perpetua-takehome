import React, { useState, useEffect, useContext } from "react";
import PlaylistSearch from "./PlaylistSearch";
import SongList from "./SongList";
import PlaylistContext from "../state/PlaylistContext";

function Player() {
  const [playlist, setPlaylist] = useContext(PlaylistContext);

  async function generatePlaylist(lyrics) {
    try {
      // generate random words

      //
      const query = new URLSearchParams({
        format: "json",
        // q_lyrics: keywords,
        quorum_factor: "1",
        apikey: process.env.REACT_APP_API_KEY,
        page_size: "1",
      });
      // const response = await fetch("/api/generatePlaylist/" + query);
      const response = await fetch("/track.search?" + query);
      return response.json();
    } catch (error) {
      console.error("error> ", error);
    }
  }

  useEffect(() => {
    // set timeout for removal of the current song
    return () => {
      // remove set timeout
      // request new song
    };
  }, [playlist]);
  return (
    <div>
      <PlaylistSearch />
      <SongList />
    </div>
  );
}

export default Player;
