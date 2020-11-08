import LibraryItem from "./LibraryItem";

function Library({songs, currentSong, setCurrentSong, audioRef, setIsPlaying, libraryOpenStatus}) {
  return (
    <div className={`library ${libraryOpenStatus ? "active-library" : ""}`}>
      <h2>Playlist</h2>
      <div className="library-list">
        { songs.map(song => <LibraryItem key={song.id} song={song} currentSong = {currentSong} setCurrentSong={setCurrentSong} audioRef={audioRef} setIsPlaying={setIsPlaying}/>) }
      </div>
    </div>
  )
}

export default Library;