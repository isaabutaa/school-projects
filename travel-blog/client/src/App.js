import React, { useContext } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from "./context/UserProvider.js"

export default function App() {
    const { token } = useContext(UserContext)
    return (
        <div>
        <h1>Welcome to Thunder Dome!</h1>
        <Switch>
            <Route exact path="/" render={() => token ? <Redirect to="/profile" /> : <Auth/>} />
            <ProtectedRoute 
                exact
                path="/profile"
                component={Profile}
                redirectTo="/"
                token={token}
            />
        </Switch>
        </div>
    )
}