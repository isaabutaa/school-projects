import React from "react"
import MotoPost from "./MotoPost.js"

export default function MotoPostList(props) {
    const { motoPosts } = props
    return (
        <div className="motoposts-list">
            {motoPosts.map(post => <MotoPost key={post._id} {...post} />)}
        </div>
    )
}