import React from "react"
import { useParams } from "react-router-dom"

export default function PostDetailPage() {
    const { postId } = useParams()
    console.log(postId)
    return (
        <div>
            <h1>Your Blog Post</h1>
        </div>
    )
}