import React, {useState} from "react"
import axios from "axios"

import Header from "./Header"
import SearchForm from "./SearchForm"
import Word from "./Word"
import ThesaurusResults from "./ThesaurusResults"
require("dotenv").config()

function App() {
    const [wordData, setWordData] = useState([])
    const [thesaurusData, setThesaurusData] = useState([])

    const dictionaryApiKey = process.env.REACT_APP_DICT_API_KEY
    const thesaurusApiKey = process.env.REACT_APP_THES_API_KEY

    function dictionarySearch(searchTerm) {
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=${dictionaryApiKey}`)
            .then(res => {
                if(res.data.length){
                    if(res.data !== "Word is required." && typeof res.data[0] === "object"){
                        setWordData(res.data)
                        setThesaurusData([])
                    }
                }
            })
            .catch(err => console.log(err))
    }

    function thesaurusSearch(searchTerm) {
        axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchTerm}?key=${thesaurusApiKey}`)
            .then(res => {
                if(res.data.length) {
                    if(res.data !== "Word is required." && typeof res.data[0] === "object") {
                        setThesaurusData(res.data)
                        setWordData([])
                    }
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Header />
            <SearchForm searchDictionary={dictionarySearch} searchThesaurus={thesaurusSearch} />
            {wordData.map((wordObj, i) => <Word key={i} word={wordObj} />)}
            {thesaurusData.map((wordObj, i) => <ThesaurusResults key={i} results={wordObj} />)}
            <div>
            <div className="search-results">
                <div>
                    <div className="circle"></div>
                    <h2 className="results-h2" style={{color: "#222"}} >herculean</h2>
                </div>
                <h3>definitions:</h3>
                <ol>
                    <li>of, relating to, or characteristic of Heroes</li>
                    <li>of extraordinary power, extent, intensity, or difficulty</li>
                </ol>
            </div>
            <div className="search-results">
                <div>
                    <div className="circle"></div>
                    <h2 className="results-h2" style={{color: "#222"}} >herculean</h2>
                </div>
                <h3>definitions:</h3>
                <ol>
                    <li>of, relating to, or characteristic of Heroes</li>
                    <li>of extraordinary power, extent, intensity, or difficulty</li>
                </ol>
            </div>
            <div className="search-results">
                <div>
                    <div className="circle"></div>
                    <h2 className="results-h2" style={{color: "#222"}} >herculean</h2>
                </div>
                <h3>definitions:</h3>
                <ol>
                    <li>of, relating to, or characteristic of Heroes</li>
                    <li>of extraordinary power, extent, intensity, or difficulty</li>
                </ol>
            </div>
            <div className="search-results">
                <div>
                    <div className="circle"></div>
                    <h2 className="results-h2" style={{color: "#222"}} >herculean</h2>
                </div>
                <h3>definitions:</h3>
                <ol>
                    <li>of, relating to, or characteristic of Heroes</li>
                    <li>of extraordinary power, extent, intensity, or difficulty</li>
                </ol>
            </div>
            <div className="search-results">
                <div>
                    <div className="circle"></div>
                    <h2 className="results-h2" style={{color: "#222"}} >herculean</h2>
                </div>
                <h3>definitions:</h3>
                <ol>
                    <li>of, relating to, or characteristic of Heroes</li>
                    <li>of extraordinary power, extent, intensity, or difficulty</li>
                </ol>
            </div>
            <div className="search-results">
                <div>
                    <div className="circle"></div>
                    <h2 className="results-h2" style={{color: "#222"}} >herculean</h2>
                </div>
                <h3>definitions:</h3>
                <ol>
                    <li>of, relating to, or characteristic of Heroes</li>
                    <li>of extraordinary power, extent, intensity, or difficulty</li>
                </ol>
            </div>
        </div>
        </div>
    )
}

export default App