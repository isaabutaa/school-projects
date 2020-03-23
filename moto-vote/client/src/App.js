import React from "react"
import { Switch, Route } from "react-router-dom"
import Auth from "./components/Auth.js"
import Navbar from "./components/Navbar.js"
import Profile from "./components/Profile.js"
import MotoPosts from "./components/MotoPosts.js"

export default function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" render={() => <Auth />} />
                <Route path="/profile" render={() => <Profile />} />
                <Route path="/moto-posts" render={() => <MotoPosts />} />
            </Switch>
        </div>
    )
}