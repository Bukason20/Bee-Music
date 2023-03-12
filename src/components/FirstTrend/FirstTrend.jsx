import { useEffect, useState } from "react"
import "./firstTrend.css"
import Fire from "../images/fire.png"
import {FaGreaterThan} from "react-icons/fa"

function FirstTrend({token}) {

    const [newRelease, setNewRelease] = useState(localStorage.getItem("newRelease") === null || localStorage.getItem("newRelease") === "" ? [] 
    :  JSON.parse(localStorage.getItem("newRelease")))
    const [error, setError] = useState()

    const getNewRelease = () => {
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=1&offset=0", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => response.json())
            .then(data => localStorage.setItem("newRelease", JSON.stringify(data.albums.items)))
            .catch(err => setError(err))
    }

    // console.log(newRelease[0])

    useEffect(() => {
        getNewRelease()
    }, [])
    
    return (
        <div className = "first-trend">
            <div className="hot">
                <p>What's hot</p>
                <img src= {Fire} alt=""/>
            </div> 
            <div className="trending">
                <h1>Trending</h1>
                <p className = "more">
                    More
                    <FaGreaterThan />
                </p>
            </div>
            <div className = "track-details">
            <p className = "artist">
                {newRelease[0].artists.map((artist, index) => (
                artist.name += " " 
                ))}
            </p>
            <p className = "trend-song">{newRelease[0].name}</p>
            <div className="btns">
                <button className = "first-trend-play">PLAY</button>
                <button className = "first-trend-follow">FOLLOW</button>
            </div>
            </div> 
            
            
        </div>
    )
}

export default FirstTrend
