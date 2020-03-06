import React, { useState, useContext }  from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserProvider.js"

export default function PostDetailPage() {
    const [toggleForm, setToggleForm] = useState(false)
    const { blogposts, deletePost, editPost } = useContext(UserContext)
    const { postId } = useParams()
    const foundPost = blogposts.find(post => post._id === postId)

    function handleEditClick() {
        setToggleForm(prev => !prev)
    }

    function handleInputChange(e) {
        const {name, value} = e.target

    }

    return (
        <div>
            <h1>Your Blog Post</h1>
            { !toggleForm ?
            <>
            <h3>{foundPost.title}</h3>
            <p>{foundPost.content}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => deletePost(foundPost._id)}>Delete</button>
            </>
            :
            <form onSubmit={() => editPost}>
                <input type="text" name="title" value={foundPost.title} placeholder="new title here" onChange={handleInputChange} />
                <input type="text" name="content" value={foundPost.content} placeholder="new content here" onChange={handleInputChange} />
                <button>Submit Update</button>
            </form>
            }
        </div>
    )
}