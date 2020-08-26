import React, { useState, useEffect } from "react";
import SongCard from "./SongCard";

function SongList({ songs }) {
  return (
    <div className="playlist">
      {songs.map((song, index) => {
        <SongCard
          index={index}
          title={song.track_name}
          trackId={song.track_id}
          artist={song.artist_name}
        />;
      })}
    </div>
  );
}

export default SongList;
