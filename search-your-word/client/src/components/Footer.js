import React from "react"

import logo from "../MWLogo.png"

function Footer() {
    return (
        <div className="footer">
            <a href="https://dictionaryapi.com/" target="_blank" rel="noopener noreferrer"><img className="logo" src={logo} alt="Merriam-Webster logo"/></a>
        </div>
    )
}

export default Footer