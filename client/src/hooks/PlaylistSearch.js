import React, { useContext, userEffect, useState } from "react";
import PlaylistContext from "../state/PlaylistContext";

function PlaylistSearch(props) {
  const [category, setCategory] = useState("");
  const [playlist, setPlaylist] = useContext(PlaylistContext);

  async function generatePlaylist(keywords) {
    console.log("Generating playlist: ", keywords);
    try {
      // set new playlist on the context
      const query = new URLSearchParams({
        format: "json",
        q_lyrics: keywords,
        quorum_factor: "1",
        apikey: process.env.REACT_APP_API_KEY,
        page_size: "2",
      });
      // const response = await fetch("/api/generatePlaylist/" + query);
      const response = await fetch("/track.search?" + query);
      return response.json();
    } catch (error) {
      console.error("error> ", error);
    }
  }

  return (
    <div className="playlist-search">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          generatePlaylist(category)
            .then(({ message }) => {
              setPlaylist([...playlist, ...message.body.track_list]);
            })
            .catch((err) =>
              console.error("ERROR: getting songs from API\n", err)
            );
        }}
      >
        <label htmlFor="search">
          <input
            id="category"
            value={category}
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <button>Generate</button>
      </form>
    </div>
  );
}

export default PlaylistSearch;
