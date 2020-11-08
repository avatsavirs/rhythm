import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import { useRef, useState } from "react";
import data from "./util/data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryOpenStatus, setLibraryOpenStatus] = useState(false);
  const audioRef = useRef(null);

  return (
    <div className={`App ${libraryOpenStatus ? "shift" : ""}`}>
      <Nav libraryOpenStatus={libraryOpenStatus} setLibraryOpenStatus={setLibraryOpenStatus}/>
      <Library libraryOpenStatus={libraryOpenStatus} setLibraryOpenStatus={setLibraryOpenStatus} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} setIsPlaying={setIsPlaying} currentSong={currentSong} libraryOpenStatus={libraryOpenStatus}/>
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} audioRef={audioRef} songs={songs}/>
    </div>    
  );
}

export default App;
