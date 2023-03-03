const style = {
    "border": "1px solid #243239",
    "borderRadius": "0.5rem",
};

const TrackItem = ({ name, cover, isActive, choiseTrack, id}) => {
    return (
        <li className="track-li" style={isActive ? style : null} >
            <div className="track-item">
                <img src={cover} className="track-image" alt="track"
                    onClick={() => choiseTrack(id)}></img>
                <span onClick={() => choiseTrack(id)}>{name}</span>
            </div>
        </li>
    )
}

export default TrackItem
