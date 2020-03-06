import React, { useContext } from "react"
import { UserContext } from "../context/UserProvider.js"
import Post from "./Post.js"

export default function ListPosts() {
    const { blogposts } = useContext(UserContext)
    return (
        <div>
            {blogposts.map(post =>
            <Post key={post._id} {...post}/>
            )}
        </div>
    )
}