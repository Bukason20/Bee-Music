import {loginEndpoint} from "../Spotify"
import style from "./login.module.css"

function Login() {
    return (
        <div className={style.loginPage}>
            <img src= "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo-spotify" className = {style.logo}/>
            <a href= {loginEndpoint}>
                <div className= {style.loginBtn}>LOG IN</div>
            </a>
        </div>
    )
}

export default Login
