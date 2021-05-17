import VideoListItem from "./VideoListItem";
import './VideoList.scss';


function VideoList(props) {
    return(
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            <ul className="video-list__card">
                {props.videos
                    .filter((video) => video.id !== "1af0jruup5gu")
                    .map((video) => (
                    <VideoListItem 
                    onClick={props.clickHandler}
                    key={video.id}
                    image={video.image}
                    title={video.title}
                    channel={video.channel}
                    />
                    ))
                }
            </ul>
        </section>
    )
}

export default VideoList;