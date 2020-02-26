import React, { useState } from "react"

const initPost = { title: "", content: "" }
export default function AddBlogpost(props) {
    const { addPost } = props
    const [blogpost, setBlogpost] = useState(initPost)
    const { title, content } = blogpost

    function handleChange(e) {
        const { name, value } = e.target
        setBlogpost(prevBlogpost => ({
            ...prevBlogpost,
            [name]: value
        }))
    }

    function handleClick() {
        addPost(blogpost)
        setBlogpost(initPost)
    }

    return (
        <form>
            <input type="text" name="title" value={title} placeholder="Title" onChange={handleChange} />
            <input type="text" name="content" value={content} placeholder="Type content here..." onChange={handleChange} />
            <button onClick={handleClick}>Post</button>
        </form>
    )
}