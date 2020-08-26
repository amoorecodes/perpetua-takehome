import React, { useContext, useEffect } from "react";
import SongCard from "./SongCard";
import PlaylistContext from "../state/PlaylistContext";

function SongList(props) {
  const [playlist] = useContext(PlaylistContext);
  return (
    <div className="playlist">
      {playlist.map((song, index) => (
        <SongCard
          index={index}
          title={song.track_name}
          trackId={song.track_id}
          artist={song.artist_name}
        />
      ))}
    </div>
  );
}

export default SongList;
