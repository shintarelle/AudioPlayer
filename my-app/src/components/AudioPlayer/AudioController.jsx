import React from "react";
import {secondToMinutes} from "../../Utils";

const AudioController = ({isPlaing, onToglePlay, duration, currentTime}) => {

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
        <div className="time-line"></div>
        <div className="play-stop-panel">
            <button className="button">
                Prev
            </button>
            <button className="button play" onClick={onToglePlay}>
                {isPlaing? 'Pause' : "Play"}
            </button>
            <button className="button">
                Next
            </button>
        </div>
        </>
    )
}

export default AudioController;
