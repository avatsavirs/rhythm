import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import { useState } from "react";
import data from "./util/data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setSong={setCurrentSong}/>
    </div>    
  );
}

export default App;
