import React from "react"

export default function MotoPost(props) {
    const { title, description, imgUrl, _id } = props

    return (
        <div className="motopost">
            <img src={imgUrl} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="button edit-btn">Edit</button>
            <button className="button delete-btn">Delete</button>
        </div>
    )
}