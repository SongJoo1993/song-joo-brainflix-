import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import VideoListItem from "./VideoListItem";
import './VideoList.scss';

class VideoList extends Component {

    state = {
        video: []
    }

    componentDidMount() {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/videoList`)
        .then((response) => {
            this.setState({
                video: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        const previousVideoId = this.props.singleVideo.id;
        return(
            <section className="video-list">
                <h2 className="video-list__title">NEXT VIDEO</h2>
                <ul className="video-list__card">
                    {this.state.video.filter(video => video.id !== previousVideoId).map((videoItem) => (
                        <NavLink key={videoItem.id} to={"/" + videoItem.id} className="video-list__card-box">
                            <VideoListItem 
                            key={videoItem.id}
                            id={videoItem.id}
                            image={videoItem.image}
                            title={videoItem.title}
                            channel={videoItem.channel}
                            />
                        </NavLink>
                        ))
                    }
                </ul>
            </section>
        )
    }
}

export default VideoList;