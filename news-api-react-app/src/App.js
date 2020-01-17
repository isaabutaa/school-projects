import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import HomePage from "./HomePage"
import Footer from "./Footer"
import TopEgypt from "./TopEgypt"
import TopBbcNews from "./TopBbcNews"

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/"><HomePage /></Route>
                <Route path="/top-egyptian-news"><TopEgypt /></Route>
                <Route path="/top-bbc-news"><TopBbcNews /></Route>
            </Switch>
            <Footer />
        </div>
    )
}