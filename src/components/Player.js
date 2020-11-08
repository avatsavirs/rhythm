import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function Player({isPlaying, setIsPlaying, currentSong}) {
  const audioRef = useRef(null);
  const [songTimeInfo, setSongTimeInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const [wasPlaying, setWasPlaying] = useState(false);
  function playSongHandler() {
    if(!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  }
  function timeUpdateHandler(e) {
    setSongTimeInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration
    });
  }
  function getTime(time) {
    if(time===undefined) return "00:00";
    return `${("0"+Math.floor(time/60)).slice(-2)}:${("0"+Math.floor(time%60)).slice(-2)}`;
  }
  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongTimeInfo({
      currentTime: e.target.value,
      duration: songTimeInfo.duration
    });
  }
  function mouseDownHandler() {
    setWasPlaying(isPlaying);
    audioRef.current.pause();
    setIsPlaying(false);
  }
  function mouseUpHandler() {
    if(!wasPlaying) return;
    audioRef.current.play();
    setIsPlaying(true);
    setWasPlaying(false);
  }
  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songTimeInfo.currentTime)}</p>
        <input type="range" min="0" max={songTimeInfo.duration} value={songTimeInfo.currentTime} onChange={dragHandler} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}/>
        <p>{getTime(songTimeInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon role="button" className="skip-back" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon role="button" className="play" size="2x" icon={isPlaying || wasPlaying? faPause: faPlay} onClick={playSongHandler}/>
        <FontAwesomeIcon role="button" className="skip-next" size="2x" icon={faAngleRight}/>
      </div>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;