import { useEffect, useState } from "react"
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { FaGreaterThan} from "react-icons/fa"
import MusicPlayer from "../music-player/MusicPlayer"
import PlayLists from "../PlayLists/PlayLists"
import Search from "../Search/Search"
import FirstTrend from "../FirstTrend/FirstTrend"
import "./home.css"

function Home({token}) {

    // console.log(playLists)
    let [activeSong, setActiveSong] = useState({})
    return (
        <div className = "home">
            <div className="home-header">
                <div className="arrows">
                    <BiLeftArrowAlt />
                    <BiRightArrowAlt />  
                </div>
                <Search />
            </div>
            <FirstTrend token = {token}/>
            <PlayLists token = {token}/>
            
        </div>
    )
}

export default Home
