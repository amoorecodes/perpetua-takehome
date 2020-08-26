import React, { userEffect, useState } from "react";

function PlaylistSearch(props) {
  const [category, setCategory] = useState("");

  function generatePlaylist(keywords) {
    console.log("Generating playlist: ", keywords);
  }

  return (
    <div className="playlist-search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generatePlaylist(category);
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
