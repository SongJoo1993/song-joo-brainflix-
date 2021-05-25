import VideoListItem from "./VideoListItem";
import './VideoList.scss';
import {Link} from "react-router-dom";

function VideoList(props) {
    console.log(props);
    const videoId = props.mainVideo.id;
    return(
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            <ul className="video-list__card">
                {props.videos
                    .filter((video) => video.id !== videoId)
                    .map((video) => (
                        <Link to={`/videos/${video.id}`} key={video.id}>
                        <VideoListItem 
                            key={video.id}
                            id={video.id}
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                            />
                        </Link>
                    ))
                }
            </ul>
        </section>
    )
}

export default VideoList;