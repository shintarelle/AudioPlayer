import { createContext } from "react";
export const AudioListContext = createContext({
  nextTrack: () => { },
  prevTrack: () => { },
    current: 0,
  setTrackByID: (id) => { },
    currentId: 0,
});
