import React, { useState } from "react"

const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
}

export default function MotoPostForm(props) {
    const { btnTxt, addMotoPost } = props
    const [inputs, setInputs] = useState(initInputs)
    const {title, description, imgUrl} = inputs

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addMotoPost(inputs)
        setInputs(initInputs)
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={title} 
                placeholder="Title"
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="description" 
                value={description} 
                placeholder="Description"
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="imgUrl" 
                value={imgUrl} 
                placeholder="Paste image url"
                onChange={handleChange} 
            />
            <button>{btnTxt}</button>
        </form>
    )
}