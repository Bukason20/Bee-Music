import { useEffect, useState } from "react"
import  "./favArtists.css"
import {BsThreeDots} from "react-icons/bs"

function FavoriteArtists({token}) {
    const [favArtists, setFavArtists] = useState(localStorage.getItem("favArtists") === null || localStorage.getItem("favArtists") === "" ? [] 
        :  JSON.parse(localStorage.getItem("favArtists")
    ))
    const getFavArtists = () => {

        fetch("https://api.spotify.com/v1/artists?ids=40LHVA5BTQp9RxHOQ9JPYj%2C1ukmGETCwXTbgrTrkRDnmn%2C5F9NFQsix9CwLRFKUbyCEL%2C3SgHzT552wy2W8pNLaLk24", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => response.json())
            .then(data => localStorage.setItem("favArtists", JSON.stringify(data.artists)))
            .catch(err => setError(err))
           
    }

    console.log(favArtists)

    useEffect(() => {
        getFavArtists()
    }, [])
    return (
        <div className = "fav-artist">
            <h2 className = "fav-artist-title">Fav Artist</h2>
            {favArtists.map((artist,index) => (
                <div className="artist-profile" key = {index}>
                    <div className="artist-identity">
                        <img src= {artist.images[0].url} alt=""/>
                        <div>
                            <p className = "fav-artist-name">{artist.name}</p>
                            <p className = "fav-artist-followers">{`${artist.followers.total} followers`}</p>
                        </div>
                    </div>
                    <BsThreeDots />
                       
                    
                    
                </div>
            ))}
        </div>
    )
}

export default FavoriteArtists
