import React from "react"

function Word(props) {
    const {word} = props
    return (
        <div className="search-results">
            <div className="circle-word-flex-container">
                <div className="circle"></div>
                <h2 className="results-h2">{word.meta.id}</h2>
            </div>
            <h3>{ word.shortdef.length > 1 ? "definitions:" : "definition"}</h3>
            <ol>
                {word.shortdef.map((definition, i) => <li key={i}> {definition} </li>)}
            </ol>
        </div>
    )
}

export default Word