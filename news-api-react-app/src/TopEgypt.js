import React, {useState, useEffect} from "react"
import Axios from "axios"

export default function TopEgypt() {
    const [arabicArticles, setArabicArticles] = useState([])

    useEffect(() => {
        let mounted = true
        if(mounted) {
            getArabicNews()
        }
        return () => mounted = false
    }, [])

    function getArabicNews() {
        Axios.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=6ea74b184e1d46f1b33560fb48edd364')
            .then(response => {
                const articles = response.data.articles
                setArabicArticles([...articles])
            })
    }

    const arabicResults = arabicArticles.map((article, i) => {
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
            {arabicResults}
        </div>
    )
}