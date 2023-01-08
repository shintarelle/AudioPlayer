import React from "react";
import useChillHop from "../../API/useChillHop";
import TrackItem from "./TrackItem";

const Library = () => {
  const chillHop = useChillHop();
  return (
    <>
      <p className="library-label">Library</p>
      <ul className="librarylist">
        {chillHop.map((c) => (
          <TrackItem key={c.id} name={c.name} cover={c.cover} />
        ))}
      </ul>
    </>
  );
};

export default Library;
