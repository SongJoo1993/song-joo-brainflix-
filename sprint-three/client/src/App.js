import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainVideo from './pages/MainVideo/MainVideo';
import VideoUpload from './pages/VideoUpload/VideoUpload';

export const API_URL = 'https://project-2-api.herokuapp.com';
export const API_KEY = 'adc56a6f-d3f3-4e0a-b470-d20a46a89a2a';

class App extends Component {

  render () {
    return(
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainVideo} />
          <Route path="/uploadPage" component={VideoUpload}/>
          <Route path="/:videoId" component={MainVideo}/>
        </Switch>
      </Router>
    )
  };
}

export default App;