import React, { useContext } from "react";
import { secondToMinutes } from "../../Utils";
import { AudioListContext } from "../../context/AudioListContext";

const AudioController = ({ isPlaing, onToglePlay, duration, currentTime,  }) => {

    const { nextTrack, prevTrack } = useContext(AudioListContext);

    const onScrub = (event) => {
    console.log("event", event);
    // clearInterval(intervalRef.current);
    // audioRef.current.currentTime = value;
    // setTrackProgress(audioRef.current.currentTime);
  };

    return(
        <>
        <div className="wrapper-time">
            <div>
                {secondToMinutes(currentTime)}
            </div>
            <div>
                {secondToMinutes(duration)}
            </div>
        </div>
            <input type="range" className="time-line"
                step="1" min="0" max={isNaN ? "0" : duration}
                value={currentTime}
                onMouseUp={e => console.log('mouseUP', e)}
                onChange={(e) => onScrub(e)}>
            </input>
        <div className="play-stop-panel">
            <button className="button" onClick={prevTrack}>
                Prev
            </button>
            <button className="button play" onClick={onToglePlay}>
                {isPlaing? 'Pause' : "Play"}
            </button>
            <button className="button" onClick={nextTrack}>
                Next
            </button>
        </div>
        </>
    )
}

export default AudioController;
