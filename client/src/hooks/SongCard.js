import React, { useState, useEffect } from "react";

function SongCard(props) {
  const [lyrics, setLyrics] = useState("Lyrics loading...");

  // make a request to the API to get lyrics
  async function getLyrics(track_id) {
    const response = await fetch(`/api/getLyrics/${track_id}`);
    return response.json();
  }

  // when component mounts, perform a request to get lyrics
  useEffect(() => {
    getLyrics()
      .then(({ data }) => setLyrics(data))
      .catch((err) =>
        console.error("ERROR: could not fetch lyrics\n", console.error(err))
      );
    // only run it once
  }, []);
  console.log("song in card", props);

  return (
    <div className="song-card">
      <h2 className="index">Song {props.index}</h2>
      <h3>Title: {props.title}</h3>
      <h3>Artist: {props.artist}</h3>
      <p>{lyrics}</p>
    </div>
  );
}

export default SongCard;
