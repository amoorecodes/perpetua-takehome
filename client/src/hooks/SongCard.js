import React, { useState, useEffect, useContext } from "react";
import PlayerContext from "../state/PlayerContext";

function SongCard({ track_id, title, artist, index }) {
  const [lyrics, setLyrics] = useState("Lyrics loading...");
  const [played, setPlayed] = useContext(PlayerContext);

  // make a request to the API to get lyrics
  async function getLyrics() {
    // const response = await fetch(`/api/getLyrics/${track_id}`);
    const query = new URLSearchParams({
      format: "json",
      track_id,
      apikey: process.env.REACT_APP_API_KEY,
    });

    const response = await fetch("/track.lyrics.get?" + query);
    return response.json();
  }

  // when component mounts, perform a request to get lyrics
  useEffect(() => {
    getLyrics(track_id)
      .then(({ message }) => setLyrics(message.body.lyrics.lyrics_body))
      .catch((err) =>
        console.error("ERROR: could not fetch lyrics\n", console.error(err))
      );
    // only run it once
  }, []);

  useEffect(() => {
    const newPlayed = { ...played };
    newPlayed[track_id] = lyrics;
    setPlayed({ ...played, ...newPlayed });
  }, [lyrics]);

  return (
    <div className="song-card">
      <h2 className="index">Song {index}</h2>
      <h3>Title: {title}</h3>
      <h3>Artist: {artist}</h3>
      <div className="lyrics">
        <p>{lyrics}</p>
      </div>
    </div>
  );
}

export default SongCard;
