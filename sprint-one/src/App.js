import Header from './components/Header';
import Hero from './components/Hero';
import VideoList from './components/VideoList';
import videoJasonData from "./data/videos.json";

function App() {
  return (
      <div>
        <Header />
        <Hero />
        <VideoList videoJasonData={videoJasonData} />
      </div>
  );
}

export default App;
