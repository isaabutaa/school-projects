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
        <form className="form">
            <input className="form-child" type="text" name="title" value={title} placeholder="Title" onChange={handleChange} />
            <textarea className="form-child" type="text" name="content" value={content} placeholder="Type content here..." onChange={handleChange} />
            <button className="form-child" onClick={handleClick}>{btnTxt}</button>
        </form>
    )
}