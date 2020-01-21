import React from "react"

function Word(props) {
    const {word} = props
    return (
        <div className="search-results">
            <div className="circle"></div>
            <h2 className="results-h2">{word.meta.id}</h2>
            <h3>Definitions:</h3>
            <ol>
                {word.shortdef.map((definition, i) => <li key={i}> {definition} </li>)}
            </ol>
        </div>
    )
}

export default Word