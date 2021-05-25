import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../App';
import { API_KEY } from '../../App';
import HeroImage from '../../components/HeroImage';
import Hero from '../../components/Hero/Hero';
import VideoList from '../../components/VideoList/VideoList';
import videoDetails from "../../data/video-details.json";
import "./MainVideo.scss"


class MainVideo extends Component {

  state = {
    mainVideoArray: [],
    mainVideo: [],
    singleVideo: videoDetails[0]
  }
  
  componentDidMount() {
    axios
      .get(`${API_URL}/videos/${this.props.match.params.videoId}?api_key=${API_KEY}`)
      .then(response => {
        this.setState({
          singleVideo: response.data
        })
      })
    
    axios
      .get(`${API_URL}/videos/?api_key=${API_KEY}`)
      .then(({data}) => {
        this.setState({
          mainVideoArray: data,
          mainVideo: data[0]
        })
      })
  }

  componentDidUpdate(prevProps) {
    const { videoId } = this.props.match.params;
    if (prevProps.match.params.videoId !== videoId) {
      axios.get(`${API_URL}/videos/${this.props.match.params.videoId}?api_key=${API_KEY}`)
            .then((response) => {
            this.setState({
            singleVideo: response.data
            });
        });
    }
  }

  render () {
    return(
      <div>
        <HeroImage mainVideo={this.state.singleVideo}/>
        <div className="divider">
          <Hero mainVideo={this.state.mainVideo} mainVideoArray={this.state.mainVideoArray} singleVideo={this.state.singleVideo}/>
          <VideoList singleVideo={this.state.singleVideo}/>
        </div> 
    </div>
    )
  };
}

export default MainVideo;