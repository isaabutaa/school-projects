import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider.js"

export default function ListPosts() {
    const { blogposts } = useContext(UserContext)
    return (
        <div>
            {blogposts.map(post => <p key={post._id}><Link to={`/profile/${post._id}`}>{post.title}</Link></p>)}
        </div>
    )
}