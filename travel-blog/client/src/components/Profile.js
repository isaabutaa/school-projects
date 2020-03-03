import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider.js"
import AddBlogpostForm from "./AddBlogpostForm.js"

export default function Profile() {
    const { blogposts, user: { username }, logout, addPost, getUserPosts } = useContext(UserContext)

    useEffect(() => {
        getUserPosts()
    }, [])

    return (
        <div>
            <p onClick={logout} style={{textDecorationLine: "underline"}}>Logout</p>
            <h1>Hello, {username}.</h1>
            <h2>Add a new blog post</h2>
            <AddBlogpostForm addPost={addPost} />
            <p>Here is a list of all of your blog posts: </p>
            {blogposts.map(post => <p key={post._id}><Link to={`/profile/${post._id}`}>{post.title}</Link></p>)}
        </div> 
    )
}