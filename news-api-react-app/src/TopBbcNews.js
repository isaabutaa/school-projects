import React, {useState, useEffect} from "react"
import Axios from "axios"

export default function TopBbcNews() {
    const [bbcNewsArticles, setBbcNews] = useState([])

    useEffect(() => getBbcNews(), [])

    function getBbcNews() {
        Axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ea74b184e1d46f1b33560fb48edd364")
            .then(response => {
                const bbcArticles = response.data.articles
                setBbcNews([...bbcArticles])
            })
    }

    const newsArticles = bbcNewsArticles.map((article, i) => {
        return (
            <div className="article" key={article.title + i.toString()}>
                <img style={{width: "300px", height: "auto"}} src={article.urlToImage} alt=""/>
                <h3> <a href={article.url}>{article.title}</a> </h3>
                <p>{article.description}</p>
                <p>Source: {article.source.name}</p>
            </div>
        )
    })

    return (
        <div className="article-container">
            {newsArticles}
        </div>
    )
}