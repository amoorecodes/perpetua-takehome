import React, { useContext, useEffect } from "react";
import SongCard from "./SongCard";
import PlaylistContext from "../state/PlaylistContext";

function SongList(props) {
  const [playlist] = useContext(PlaylistContext);
  return (
    <div className="playlist">
      {playlist.map(({ track }, index) => (
        <SongCard
          index={index + 1}
          title={track.track_name}
          trackId={track.track_id}
          artist={track.artist_name}
          key={track.track_id}
        />
      ))}
    </div>
  );
}

export default SongList;
