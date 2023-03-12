import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Shortcut from "./components/Shortcuts/Shortcut";
import Sidebar from "./components/SideBar/Sidebar";
import { setClientToken } from "./components/Spotify";

function App() {
  const [token, setToken] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const hash = window.location.hash
    window.location.hash = ""
    if(!token && hash){
      const userToken = hash.split("&")[0].split("=")[1]
      window.localStorage.setItem("token", userToken)
      setToken(userToken)
      setClientToken(userToken)
    }else {
      setToken(token)
      setClientToken(token)
    }
    
  }, [])
   return (!token ?
    <Login /> :

    <Router>
      <Sidebar token = {token}/>
       <div className="app-contents">
         <Switch>
           <Route exact path = "/">
             <Home token = {token}/>
           </Route>
         </Switch>
         <Shortcut token = {token} />
       </div> 
       
    </Router>
  )
}

export default App
