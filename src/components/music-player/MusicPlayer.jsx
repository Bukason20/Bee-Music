import {MdFavoriteBorder} from "react-icons/md"
import {FiMusic, FiRepeat} from "react-icons/fi"
import {IoIosResize} from "react-icons/io"
import {AiFillFastForward, AiFillFastBackward} from "react-icons/ai"
import {BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle} from "react-icons/bs"
import {BiVolumeFull, BiVolumeLow} from "react-icons/bi"
import "./music-player.css"
import { useState, useRef, useEffect } from "react"

function MusicPlayer({currentSong, playLists, currentIndex, audioSrc, getCurrentSong}) {
    const [play, setPlay] = useState(false);
    const [pause, setPause] = useState(true);


    
    
    // const audio = audioSrc
    const [songAudio, setsongAudio] = useState(new Audio(audioSrc))

    
    // console.log(audio)

    const playMusic = () => {
        setPause(false)
        setPlay(true)
        songAudio.play()
        console.log(currentSong[0].track.name)
    }

    const pauseMusic = () => {
        setPause(true)
        setPlay(false)
        songAudio.pause()
    }

    // useEffect(() => {
    //     playMusic();
    // }, [getCurrentSong])

    const playPrevious =() => {

    }

    const playNext = () => {

    }

    return (
        <div className = "music-player">
            <div className="player-utils">
                <div className="first-utils">
                    <button >
                        <MdFavoriteBorder />
                    </button>
                    <button>
                        <FiMusic/>
                    </button>
                    <button>
                        <IoIosResize />
                    </button>
                    
                    
                    
                    
                </div>

                <div className="second-utils">
                    <AiFillFastBackward />
                    <div className="play-pause">
                        <button className= {pause ? "" : "play"} onClick = {playMusic}>
                            <BsFillPlayCircleFill/>
                        </button>
                        <button className= {play ? "" : "pause"} onClick = {pauseMusic}>
                            <BsFillPauseCircleFill />
                        </button>  
                    </div>
                    <AiFillFastForward />
                </div>

                <div className="volume">
                    <BiVolumeLow />
                    <BiVolumeFull />
                </div>
            </div>
           
        </div>
    )
}

export default MusicPlayer
