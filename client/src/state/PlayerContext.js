import { createContext } from "react";

// context to track the songs played/added and their lyrics
const PlayerContext = createContext([{}, (songs) => ({ ...songs })]);

export default PlayerContext;
