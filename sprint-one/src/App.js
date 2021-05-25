import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HeroImage from './components/HeroImage'
import VideoList from './components/VideoList/VideoList';
import videoJasonData from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import './App.scss';

class App extends Component {

  state = {
    mainVideoArray: videoDetails,
    mainVideo: videoDetails[0],
    videos: videoJasonData
  }
  
  selectedVideo = (event,id) => {
    console.log(event);
    // console.log(id);
    const videoArray = this.state.mainVideoArray;
    const newMainVideo = videoArray.find((video) => video.id === id);
    this.setState({
      mainVideo: newMainVideo
    })
  }

  render () {
    return(
      <div>
        <Header />
        <HeroImage mainVideo={this.state.mainVideo}/>
        <div className="divider">
          <Hero mainVideo={this.state.mainVideo}/>
          <VideoList videos={this.state.videos} mainVideo={this.state.mainVideo} clickHandler={this.selectedVideo} />
        </div>
    </div>
    )
  };
}

export default App;