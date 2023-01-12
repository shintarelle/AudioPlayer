import React, { useContext } from "react";
import { secondToMinutes } from "../../Utils";
import { AudioListContext } from "../../context/AudioListContext";
import { ReactComponent as Play } from "../svg/play.svg";
import { ReactComponent as Pause } from "../svg/pause.svg";
import { ReactComponent as Next } from "../svg/next.svg";
import { ReactComponent as Prev } from "../svg/prev.svg";
import { useEffect } from "react";

const AudioController = ({ isPlaing, onToglePlay, duration, currentTime, onScrub }) => {

    const { nextTrack, prevTrack } = useContext(AudioListContext);

    // let max = isNaN ? "0" : duration;
    //это условие ломало onChange, max оставалось 0. покороче не придумала способ

    if (isNaN(duration)) {
        return (
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
                    step="1" min="0" max="0"
                    value={currentTime}
                    onChange={(e) => onScrub(e.target.value)}
                    onKeyUp={(e) => onScrub(e.target.value)}>
                </input>
                <div className="play-stop-panel">
                    <button className="button" onClick={prevTrack}>
                        <Prev />
                    </button>
                    <button className="button play" onClick={onToglePlay}>
                        {isPlaing ? <Pause /> : <Play />}
                    </button>
                    <button className="button" onClick={nextTrack}>
                        <Next />
                    </button>
                </div>
            </>)
    } else {
        return (

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
                    step="1" min="0" max={duration}
                    value={currentTime}
                    onChange={(e) => onScrub(e.target.value)}
                    onKeyUp={(e) => onScrub(e.target.value)}>
                </input>

                <div className="play-stop-panel">
                    <button className="button" onClick={prevTrack}>
                        <Prev />
                    </button>
                    <button className="button play" onClick={onToglePlay}>
                        {isPlaing ? <Pause /> : <Play />}
                    </button>
                    <button className="button" onClick={nextTrack}>
                        <Next />
                    </button>
                </div>
            </>
        )
    }
}

export default AudioController;
