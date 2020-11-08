import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";

function Nav({libraryOpenStatus, setLibraryOpenStatus}) {
  return (
    <nav className="navbar">
      <h1>Rhythm</h1>
      <button onClick={()=>{setLibraryOpenStatus(!libraryOpenStatus)}}>Library <FontAwesomeIcon icon={faMusic}/></button>
    </nav>
  );
}

export default Nav;