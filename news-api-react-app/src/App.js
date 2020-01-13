import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import HomePage from "./HomePage"
import TopEgypt from "./TopEgypt"
import TopBbcNews from "./TopBbcNews"

export default function App() {
    // const [arabicArticles, setArabicArticles] = useState([])
    // const [bbcNewsArticles, setBbcNews] = useState([])

    // useEffect(() => getArabicNews(), [arabicArticles])
    // useEffect(() => getBbcNews(), [bbcNewsArticles])

    // function getArabicNews() {
    //     axios.get('https://newsapi.org/v2/top-headlines?language=ar&apiKey=6ea74b184e1d46f1b33560fb48edd364')
    //         .then(response => {
    //             const articles = response.data.articles
    //             setArabicArticles([...articles])
    //         })
    // }

    // function getBbcNews() {
    //     axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ea74b184e1d46f1b33560fb48edd364")
    //         .then(response => {
    //             const bbcArticles = response.data.articles
    //             setBbcNews([...bbcArticles])
    //         })
    // }

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/"><HomePage /></Route>
                <Route path="/top-egyptian-news"><TopEgypt /></Route>
                <Route path="/top-bbc-news"><TopBbcNews /></Route>
            </Switch>
        </div>
    )
}