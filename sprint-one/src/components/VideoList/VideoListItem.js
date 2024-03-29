import './VideoListItem.scss';

function VideoListItem (props) {
    // console.log(props);
    return(
        <li className="video-list__card-item" onClick={(event) => {props.onClick(event,props.id)}}>
            <img src={props.image} className="video-list__card-image" alt="Video Profile" id={props.id}></img>
            <div className="video-list__information">
                <h3 className="video-list__card-title">{props.title}</h3>
                <h4 className="video-list__card-publisher">{props.channel}</h4>
            </div>
        </li>
    )
}

export default VideoListItem;