import React from "react"
import PostForm from "./PostForm.js"

export default function Profile() {
    return (
        <div>
            <p>This is your profile page @username</p>
            <p>Add post form goes here</p>
            <PostForm />
            <p>List of your previous posts goes here</p>
        </div>
    )
}