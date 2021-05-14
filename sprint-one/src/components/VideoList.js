import VideoListItem from "./VideoListItem";

function VideoList(props) {
    console.log(props);
    return(
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            <ul className="video-list__card">
                {props.videoJasonData
                    .filter((video) => video.id !== "1af0jruup5gu")
                    .map((video) => (
                        <VideoListItem 
                        key = {video.id}
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