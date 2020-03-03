import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserProvider.js"

export default function PostDetailPage() {
    const { blogposts } = useContext(UserContext)
    const { postId } = useParams()
    const foundPost = blogposts.find(post => post._id === postId)
    return (
        <div>
            <h1>Your Blog Post</h1>
            <h3>{foundPost.title}</h3>
            <p>{foundPost.content}</p>
        </div>
    )
}