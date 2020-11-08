import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>start time</p>
        <input type="range"/>
        <p>end time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon className="play" size="2x" icon={faPlay}/>
        <FontAwesomeIcon className="skip-next" size="2x" icon={faAngleRight}/>
      </div>
    </div>
  )
}

export default Player;