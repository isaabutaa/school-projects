import React, {useState} from "react"
import axios from "axios"

import Header from "./components/Header"
import SearchForm from "./components/SearchForm"
import Word from "./components/Word"
import ThesaurusResults from "./components/ThesaurusResults"
import Footer from "./components/Footer"
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
            <Footer />
        </div>
    )
}

export default App