import React from "react"

function BucketItem(props) {
    const {title, description, completeByYear} = props
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{completeByYear}</p>
        </div>
    )
}

export default BucketItem