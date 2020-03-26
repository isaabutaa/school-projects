import React from "react"
import MotoPostForm from "./MotoPostForm.js"
import MotoPostList from "./MotoPostList.js"
import MotoPost from "./MotoPost.js"

export default function Profile() {
    return (
        <div>
            <p>This is your profile page @username</p>
            <p>Add post form goes here</p>
            <MotoPostForm btnTxt="Add MotoPost" />
            <p>List of your previous posts goes here</p>
        </div>
    )
}