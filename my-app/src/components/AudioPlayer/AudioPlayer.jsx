import React, { useEffect, useRef, useState,useContext } from "react";
import useChillHop from "../../API/useChillHop";
import AudioController from "./AudioController";
import { AudioListContext } from "../../context/AudioListContext";

const AudioPlayer = () => {

  const { current: currentIdx, nextTrack} = useContext(AudioListContext);

  const [isPlaing, setIsPlaing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const current = useChillHop()[currentIdx];
  const AudioRef = useRef(new Audio(current.audio));

  const intervalRef = useRef(null);

  //   const interval = setInterval(() => {
  //     // console.log('interval id ', interval)
  //     setCurrentTime(currentTime + 1);
  //   }, 1000);

  const toggleHandler = () => {
    setIsPlaing(!isPlaing);
  };

  const play = async () => {
    // console.log('play')
    await AudioRef.current.play();
    intervalRef.current = setInterval(() => {
      // console.log('currentTime', currentTime, intervalRef.current, AudioRef.current.duration)
      setCurrentTime((c) =>  c + 1);
    }, 1000)

  };

  const pause = () => {
    // console.log('pause')
    AudioRef.current.pause();
    clearInterval(intervalRef.current)
  };

  const handlerScrub = (value) => {
    console.log('in handlerScrub value', value)
    clearInterval(intervalRef.current);
    AudioRef.current.currentTime = value;
    setCurrentTime(value);

  //   clearInterval(intervalRef.current);
  //   audioRef.current.currentTime = value;
  //   setTrackProgress(audioRef.current.currentTime);
  }

  useEffect(() => {
    if (isPlaing) {
      play();
    } else {
      pause();
    }
  }, [isPlaing]);

  useEffect(() => {
    if (currentTime >= AudioRef.current.duration) {
      setCurrentTime((c) => 0);
      nextTrack();
    }
  }, [currentTime, nextTrack]);

  useEffect(() => {
    setCurrentTime(0);
    if (isPlaing) {
      pause();
      // AudioRef.current.muted = true;
    }
    AudioRef.current = (new Audio(current.audio));
    if (isPlaing) {
      play();
      }
      // AudioRef.current.muted = false;

  }, [currentIdx])

  return (
    <>
      <div className="audioplayer">
        <img className="audio-image" src={current.cover}></img>
        <span className="audio-name">{current.name} -
        <span className="audio-artist">  {current.artist}</span>
        </span>


        <AudioController
          isPlaing={isPlaing}
          duration={AudioRef.current.duration}
          currentTime={currentTime}
          onScrub={handlerScrub}
          onToglePlay={toggleHandler}
        />
      </div>

    </>
  );
};

export default AudioPlayer;
