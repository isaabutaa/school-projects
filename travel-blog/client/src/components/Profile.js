import React, { useEffect, useContext } from "react"
import { UserContext } from "../context/UserProvider.js"
import AddBlogpostForm from "./AddBlogpostForm.js"
import ListPosts from "./ListPosts.js"

export default function Profile() {
    const { user: { username }, logout, addPost, getUserPosts } = useContext(UserContext)

    useEffect(() => {
        getUserPosts()
    }, [])

    return (
        <div className="profile">
            <p onClick={logout} style={{textDecorationLine: "underline"}}>Logout</p>
            <h1>Hello, <span className="username">{username}</span>.</h1>
            <h2>Add a new blog post</h2>
            <AddBlogpostForm submit={addPost} btnTxt="Add Post" />
            <h2>Your blog posts: </h2>
            <ListPosts />
        </div> 
    )
}