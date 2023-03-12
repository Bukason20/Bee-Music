import axios from "axios"

const authEndpoint = "https://accounts.spotify.com/authorize"
const clientID = "d121e5c66e3a438a961f65350974825d"
const redirectUri = "https://bee-music-delta.vercel.app/"
const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`

const apiClient = axios.create({
    baseURL : "https://api.spotify.com/v1/"
})

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer" + token
        return config
    })
}

export default apiClient