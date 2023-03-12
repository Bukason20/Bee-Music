import { useEffect, useState } from "react"
import "./Sidebar.css"
import {AiFillHome, AiOutlineStar, AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
import {BiLineChart} from "react-icons/bi"
import {FaUserCircle} from "react-icons/fa"
import {GrFavorite} from "react-icons/gr"
import {MdFavoriteBorder, MdWindow} from "react-icons/md"
import {IoIosPeople} from "react-icons/io"
import {RxCalendar, RxCrumpledPaper, RxDisc} from "react-icons/rx"


function Sidebar({token}) {
    const [user, setUser] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])

    // console.log(user.images.length)

    const [active, setActive] = useState(false)
    const [fullNav, setFullNav] = useState(false)

    const activeLink = (e) => {
        if(e.target.classList.contains("link")){
            const links = Array.from(e.target.parentElement.children)

            links.forEach(li => {
                if(li.classList.contains("link")){
                    li.classList.remove("active")
                    if(e.target.classList.contains("link")){
                        e.target.classList.add("active")
                        li.classList.remove("active")
                    }else {
                        e.target.classList.remove("active")
                    }
                }
            })
            
        }
    }

    const showNav = (e) => {
        if(e.target.classList.contains("burger2")){
            setFullNav(() => !fullNav)
        }
        console.log(fullNav)
    }
    return (
        <div className = {`sidebar ${fullNav && "fullNav"}`}>
            <p className= "burger">burger</p>
            <button className="burger2" onClick = {showNav}>
                {fullNav ? <AiOutlineMenuFold size = "20px"/> : <AiOutlineMenuUnfold/>}
            </button><br />
            <p className = "logo" ><span className="bee">Bee</span>Music</p>
            <ul className = "links" onClick = {activeLink}>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <AiFillHome />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Home</span> 
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <BiLineChart />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Trends</span>
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <RxDisc />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Feeds</span>
                </li>

                <p>Discover</p>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <MdWindow />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>New and Notable</span>
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <RxCalendar />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Release Calendar</span>
                
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <RxCrumpledPaper />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Events</span>
                </li>

                <p>Your Collection</p>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <MdFavoriteBorder />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Favorite Songs</span>
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <IoIosPeople />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Artist</span>
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <AiOutlineStar />
                    <span className = {`link-none ${fullNav && "fullNav"}`}>Albums</span>
                </li>
            </ul>

            <hr/>
            <div className="user-profile">
                <p>{user.images == undefined || user.images.length == 0 ? <FaUserCircle /> : <img src =  {user.images[0].url}/> }</p>
                <p className = "user-name">{user.display_name}</p>
            </div>
        </div>
    )
}

export default Sidebar

