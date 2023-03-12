import "./shortcuts.css"
import IMG1 from "../images/snowflake2.png"
import IMG2 from "../images/favourite.png"
import IMG3 from "../images/electric-guitar.png"
import IMG4 from "../images/music-player.png"
import IMG5 from "../images/piano.png"
import IMG6 from "../images/trumpet.png"
import FavoriteArtists from "../Favorite artists/FavoriteArtists"

function Shortcut({token}) {
    return (
        <div className = "shortcuts">
            <h2 className = "shortcut-title">Shortcuts</h2>
            <div className="music-genres">
                <div className = "genre">
                    <img src={IMG1} alt=""/>
                    <p>Chill Hits</p>
                </div>
                <div className = "genre">
                    <img src= {IMG2} alt=""/>
                    <p>Hop</p>
                </div>
                <div className = "genre">
                    <img src= {IMG3} alt=""/>
                    <p>Accoustic</p>
                </div>
                <div className = "genre">
                    <img src= {IMG4} alt=""/>
                    <p>Indie Pop</p>
                </div>
                <div className = "genre">
                    <img src= {IMG5} alt=""/>
                    <p>Piano Blues</p>
                </div>
                <div className = "genre">
                    <img src= {IMG6} alt=""/>
                    <p>Jazz</p>
                </div>
            </div>

            <FavoriteArtists token = {token}/>
        </div>
    )
}

export default Shortcut
