import { useEffect, useRef, useState } from "react";
import MusicPlayer from "../music-player/MusicPlayer";

function PlayLists({token}) {

    const [playLists, setPlayLists] = useState(localStorage.getItem("playlists") === null || localStorage.getItem("playlists") === "" ? [] 
        :  JSON.parse(localStorage.getItem("playlists")
    ))
    const [active, setActive] = useState()
    const [error, setError] = useState("")
    const [currentIndex, setCurrentIndex] = useState()
    const [currentSong, setCurrentSong] = useState(playLists.filter((playlist, index) => (
        index == 0
    )))
   const [isPlaying, setIsPlaying] = useState(false)
   const [audioSrc, setAudioSrc] = useState()


    const getCurrentIndex =  function() {
        currentSong.map(song => {
            playLists.map((playlist, index) => {
                if(song.track.name == playlist.track.name){
                    setCurrentIndex(index)
                }
            })
        })
    }

    // let audioSrc = playLists[currentIndex].track.preview_url;
    // console.log(playLists[currentIndex])
    // const audioRef = useRef(new Audio(playLists[0].track.preview_url))

    function getPlayLists(){

        fetch("https://api.spotify.com/v1/playlists/45hDYdBXHehwWGM0aLMoLc/tracks?limit=50&offset=0", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => response.json())
            .then(data => localStorage.setItem("playlists", JSON.stringify(data.items)))
            .catch(err => setError(err))
           
    }


    const getCurrentSong = function(id){
        setCurrentSong(playLists.filter((playlist) => id == playlist.track.id))
        getCurrentIndex()
        
    }
    
    useEffect(() => {
        getPlayLists()
        // getPlayListsItems()
    }, [])
    
    useEffect (() => {
       getCurrentIndex()
       setAudioSrc(currentSong[0].track.preview_url)
    }, [getCurrentSong])
    
    const millisToMinutes = (millis) => {
        Number(millis)
        let minutes = Math.floor(millis/60000)
        var seconds = ((millis % 60000) / 1000).toFixed(0)

        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    // console.log(audioSrc, currentSong[0].track.name)

    const showAll = () => {

    }

    

    return (
        <div className="playlist-section">
            <div className="playlist-section-head">
                <h1 className = "title">My Playlist</h1>
                <p className = "show-all">show All</p>
            </div>
            
            <div className="playlist-items">
                <div className="playlist-items-head">
                    <p id = "song-no">#</p>
                    <p>TITLE</p>
                    <p>ARTIST</p>
                    <p id = "song-time">TIME</p>
                </div>
                {playLists.length !== 0 ?  playLists.map((playlist, index) => (
                    <div  key = {index} onClick = {() => getCurrentSong(playlist.track.id)}>
                        
                        {playlist.track !== null && index < 5 ? (
                            <div className = {`song ${active ? "active" : ""}`}>
                                <p id ="song-no">0{index + 1}</p>
                                <p>{playlist.track.name}</p>
                                <p>
                                    {playlist.track.artists.map((artist, index) => (
                                    artist.name += " " 
                                    ))}
                                </p>
                                <p id = "song-time">{millisToMinutes(playlist.track.duration_ms)}</p>
                            </div>
                        ): ""}
                        
                        
                    </div>
                )): "NO playlists"}
            </div>
            <MusicPlayer currentSong = {currentSong} playLists = {playLists} currentIndex = {currentIndex} audioSrc = {audioSrc} getCurrentSong = {getCurrentSong}/>
        </div> 
        
    )
}

export default PlayLists
