const TrackItem = ({ name, cover }) => {
    console.log(name, cover)
    return (
        <li className="track-li">
            <div className="track-item">
                <img src={cover} className="track-image" alt="image"></img>
                <span>{name}</span>
            </div>
        </li>
    )
}


export default TrackItem
