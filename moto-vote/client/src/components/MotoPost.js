import React, { useContext } from "react"
import { UserContext } from "../context/UserProvider.js"

export default function MotoPost(props) {
    const { title, description, imgUrl, _id } = props
    const { deleteMotoPost } = useContext(UserContext)

    return (
        <div className="motopost">
            <img src={imgUrl} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="button edit-btn">Edit</button>
            <button className="button delete-btn" onClick={() => deleteMotoPost(_id)}>Delete</button>
        </div>
    )
}