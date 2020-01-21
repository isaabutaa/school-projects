import React from "react"

function ThesaurusResults(props) {
    const {results} = props
    return (
        <div className="search-results">
            <div className="circle" style={{background: "crimson"}}></div>
            <h2 className="results-h2">{results.meta.id}</h2>
            <h3>definitions:</h3>
            <ol>
                {results.shortdef.map((definition, i) => <li key={i}> {definition} </li>)}
            </ol>
            <h3>synonyms:</h3>
            <ol>
                {results.meta.syns.map((synArr, i) => <li key={i}> {synArr.join(", ")} </li>)}
            </ol>
            <h3>antonyms:</h3>
            <ol>
                {results.meta.ants.map((antArr, i) => <li key={i}> {antArr.join(", ")} </li>)}
            </ol>
        </div>
    )
}

export default ThesaurusResults