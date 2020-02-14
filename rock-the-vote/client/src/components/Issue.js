import React from "react"

export default function Issue(props) {
    const { title, description } = props
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}