import React, { useState } from "react"

export default function AddBlogpost(props) {
    const { submit, btnTxt, _id } = props
    const initPost = { 
        title: props.title || "", 
        content: props.content || "" 
    }
    const [blogpost, setBlogpost] = useState(initPost)
    const { title, content } = blogpost

    function handleChange(e) {
        const { name, value } = e.target
        setBlogpost(prevBlogpost => ({
            ...prevBlogpost,
            [name]: value
        }))
    }

    function handleClick(e) {
        e.preventDefault()
        submit(blogpost, _id)
        setBlogpost(initPost)
    }

    return (
        <form>
            <input type="text" name="title" value={title} placeholder="Title" onChange={handleChange} />
            <input type="text" name="content" value={content} placeholder="Type content here..." onChange={handleChange} />
            <button onClick={handleClick}>{btnTxt}</button>
        </form>
    )
}