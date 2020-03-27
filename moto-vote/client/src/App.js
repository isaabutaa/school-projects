import React, { useContext } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Auth from "./components/Auth.js"
import Navbar from "./components/Navbar.js"
import Profile from "./components/Profile.js"
import MotoPosts from "./components/MotoPosts.js"
import {UserContext} from "./context/UserProvider.js"

export default function App() {
    const { token, logout } = useContext(UserContext)
    return (
        <div>
            <Navbar logout={logout} />
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={() => token ? <Redirect to="/profile" /> : <Auth />} 
                />
                <Route 
                    path="/profile" 
                    render={() => <Profile />} 
                />
                <Route 
                    path="/moto-posts" 
                    render={() => <MotoPosts />} 
                />
            </Switch>
        </div>
    )
}