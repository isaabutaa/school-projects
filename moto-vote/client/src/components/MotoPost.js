import React from "react"

export default function MotoPost() {
    return (
        <div className="motopost">
            {/* <img /> */}
            <p>Image goes here</p>
            <h2>title</h2>
            <p>description</p>
            <button className="button edit-btn">Edit</button>
            <button className="button delete-btn">Delete</button>
        </div>
    )
}