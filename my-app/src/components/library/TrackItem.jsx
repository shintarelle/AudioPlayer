const style = "border: 1px solid #ccc; padding: 10px"
const TrackItem = ({ name, cover, isActive }) => {
    return (
        <li className="track-li" style={isActive ? { style } : null}>
            <div className="track-item">
                <img src={cover} className="track-image" alt="image"></img>
                <span>{name}</span>
            </div>
        </li>
    )
}


export default TrackItem
