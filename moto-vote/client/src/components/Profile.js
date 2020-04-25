import React, { useContext, useEffect } from "react"
import MotoPostForm from "./MotoPostForm.js"
import MotoPostList from "./MotoPostList.js"
import { UserContext } from "../context/UserProvider.js"

export default function Profile() {
    const { motoPosts, user: { username }, getMotoPosts, addMotoPost } = useContext(UserContext)

    useEffect(() => {
        getMotoPosts()
    })

    return (
        <div>
            <p>This is your profile page @{username}</p>
            <p>Add post form goes here</p>
            <MotoPostForm addMotoPost={addMotoPost} btnTxt="Add MotoPost" />
            <p>List of your previous posts goes here</p>
            <MotoPostList motoPosts={motoPosts} />
        </div>
    )
}