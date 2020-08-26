import { createContext } from "react";

const PlaylistContext = createContext([[], (newSongs) => [...newSongs]]);

export default PlaylistContext;
