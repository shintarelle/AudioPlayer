import React from "react";
import Library from "./components/library/Library";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import useListController from "./hooks/useListController";

export default function App() {
  const { current, setTrackByID, nextTrack, prewTrack } = useListController();

  return (
    <div className="wrapper">
      <div className="library">
        <Library currentTrack={current} setTrackByID={setTrackByID} />
      </div>
      <div className="audioplayer">
        <AudioPlayer
        currentTrack={current}
        nextTrack={nextTrack}
        prewTrack={prewTrack}
        />
      </div>

    </div>
  );
}
