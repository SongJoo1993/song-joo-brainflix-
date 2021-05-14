function VideoListItem (props) {
    return(
        <li className="video-list__card-item">
            <img src={props.image} className="video-list__card-image" alt="Video Profile"></img>
            <h3 className="video-list__card-title">{props.title}</h3>
            <h4 className="video-list__card-publisher">{props.channel}</h4>
        </li>
    )
}

export default VideoListItem;