import LibraryItem from "./LibraryItem";

function Library({songs, currentSong, setCurrentSong, audioRef, setIsPlaying, libraryOpenStatus, setLibraryOpenStatus}) {
  return (
    <div className={`library ${libraryOpenStatus ? "active-library" : ""}`}>
      <h2 className="playlist-header">Playlist</h2>
      <div className="library-list">
        { songs.map(song => <LibraryItem key={song.id} song={song} currentSong = {currentSong} setCurrentSong={setCurrentSong} audioRef={audioRef} setIsPlaying={setIsPlaying} libraryOpenStatus={libraryOpenStatus} setLibraryOpenStatus={setLibraryOpenStatus}/>) }
      </div>
    </div>
  )
}

export default Library;