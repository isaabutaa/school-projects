import React, {useState} from "react"
import Axios from "axios"

import ArticleList from "./ArticleList"

export default function HomePage() {
    const [inputData, setInputData] = useState({searchKeyword: ""})
    const [searchResults, setSearchResults] = useState([])
    const [toggleH2, setToggleH2] = useState(false)
    const [forVariable, setForVariable] = useState({searchTerm: ""})

    function handleChange(e) {
    const {name, value} = e.target
    setInputData({ [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        getData()
        setForVariable({searchTerm: inputData.searchKeyword})
        setInputData({searchKeyword: ""})
        setToggleH2(true)
    }

    function getData() {
        Axios.get(`https://newsapi.org/v2/everything?q=${inputData.searchKeyword}&apiKey=6ea74b184e1d46f1b33560fb48edd364`)
            .then(response => {
                const articles = response.data.articles
                setSearchResults([...articles])
            })
            .catch(err => console.log(err))
    }

    const articleList = searchResults.map((article, i) => {
        return <ArticleList key={article.title + i.toString()} article={article} />
    })

    return (
        <div className="home-content-container">
            <form onSubmit={handleSubmit} id="search-form">
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="searchKeyword" 
                    value ={inputData.searchKeyword} 
                    placeholder="Enter search keyword to find relevant news articles"
                />
                <button>Search</button>
            </form>
            <h2 style={{display: toggleH2 ? "block" : "none"}}>Search results for '{`${forVariable.searchTerm.charAt(0).toUpperCase()}${forVariable.searchTerm.slice(1)}`}' <span>(Powered by <a href="https://newsapi.org">News API)</a></span>: </h2>
            <div className="article-container">
                {articleList}
            </div>
        </div>
    )
}