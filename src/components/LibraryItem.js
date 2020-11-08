function LibraryItem({song, currentSong, setCurrentSong, audioRef, setIsPlaying}) {
  async function songSelectHandler() {
    await setCurrentSong(song);
    audioRef.current.play();
    setIsPlaying(true);
  }
  return (
    <div className={`library-item ${song===currentSong ? "selected" : ""}`} onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name}/>
      <div className="library-item-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  )
}

export default LibraryItem;