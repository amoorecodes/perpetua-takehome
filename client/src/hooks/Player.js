import React, { useEffect, useContext } from "react";
import PlaylistSearch from "./PlaylistSearch";
import SongList from "./SongList";
import PlaylistContext from "../state/PlaylistContext";
import PlayerContext from "../state/PlayerContext";

function Player() {
  const [playlist, setPlaylist] = useContext(PlaylistContext);
  const [played, setPlayed] = useContext(PlayerContext);

  async function getSong(lyrics) {
    try {
      // generate random words
      let onlyLyrics = lyrics.split("...  ******* ")[0].split(" ");
      let keywords = [];
      while (keywords.length < 5) {
        const random = Math.floor(Math.random() * (onlyLyrics.length - 1) + 1);
        keywords.push(onlyLyrics[random]);

        onlyLyrics = [
          ...onlyLyrics.slice(0, random),
          ...onlyLyrics.slice(random + 1),
        ];
      }
      // create a query object
      const query = new URLSearchParams({
        format: "json",
        q_lyrics: keywords,
        quorum_factor: "1",
        apikey: process.env.REACT_APP_API_KEY,
        page_size: "1",
      });
      // hit API for a new song
      const response = await fetch("/track.search?" + query);
      return response.json();
    } catch (error) {
      console.error("ERROR retrieving similar song: \n", error);
    }
  }

  async function getNewSong() {
    const endedSong = playlist[0].track.track_id;
    // get similar song
    await getSong(played[endedSong])
      .then(({ message }) => {
        const newSong = message.body.track_list[0];
        // check if we got back result and it has not been played
        if (newSong) {
          if (played[newSong.track.track_id]) {
            // another call
            getSong(played[endedSong]);
          } else {
            // add new song to the playlist
            setPlaylist([...playlist.slice(1), ...message.body.track_list]);
          }
        } else {
          // another call
          getSong(played[endedSong]);
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    // checking if we have songs in the played store
    if (Object.keys(played).length) {
      const timer = setTimeout(getNewSong, 15000);
      return () => {
        // remove set timeout
        // for some reason it is unstable with cleanup
        // works without cleanup
        // this can cause memory leak
        clearTimeout(timer);
      };
    }
  }, [played, setPlayed]);
  return (
    <div>
      <PlaylistSearch />
      <SongList />
    </div>
  );
}

export default Player;
