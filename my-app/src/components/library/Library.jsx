import React from "react";
import { useContext } from "react";
import useChillHop from "../../API/useChillHop";
import { AudioListContext } from "../../context/AudioListContext";
import TrackItem from "./TrackItem";

const Library = () => {
  const chillHop = useChillHop();

  const { currentId } = useContext(AudioListContext);

  return (
    <>
      <div className="library">
        <p className="library-label">Library</p>
        <ul className="librarylist">
          {chillHop.map((c) => (
            <TrackItem key={c.id} name={c.name} cover={c.cover} isActive={currentId === c.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Library;
