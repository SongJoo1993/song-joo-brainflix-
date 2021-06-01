import React, { Component } from 'react';
import axios from 'axios';
import HeroImage from '../../components/HeroImage';
import Hero from '../../components/Hero/Hero';
import VideoList from '../../components/VideoList/VideoList';
import "./MainVideo.scss"


class MainVideo extends Component {

  state = {
    singleVideo: []
  }
  
  fetchVideoDetails = videoId => {
    
    if(!videoId) {
        videoId = "1af0jruup5gu";
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/videoList/${videoId}`)
      .then((videoDetails) => {
        this.setState({
          singleVideo: videoDetails.data
        })
      })
  }

  componentDidMount() {
    const currentVideoId = this.props.match.params.videoId;

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/videoList`)
      .then(({data}) => {
        return data[0].id;
      })
      .then((defaultVideoId) => {
        const loadingVideoId = currentVideoId === undefined ? defaultVideoId : currentVideoId;
        this.fetchVideoDetails(loadingVideoId);
      })
  }

  componentDidUpdate(prevProps) {
    const { videoId } = this.props.match.params;

    if (prevProps.match.params.videoId !== videoId) {
      this.fetchVideoDetails(videoId);
    }
  }

  render () {
    return(
      <div>
        <HeroImage singleVideo={this.state.singleVideo}/>
        <div className="divider">
          <Hero singleVideo={this.state.singleVideo}/>
          <VideoList singleVideo={this.state.singleVideo}/>
        </div> 
    </div>
    )
  };
}

export default MainVideo;