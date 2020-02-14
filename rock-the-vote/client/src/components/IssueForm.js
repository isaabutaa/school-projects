import React, { useState } from "react"

const initInputs = { title: "", description: ""}

export default function IssueForm(props) {
    const { addIssue } = props
    const [inputs, setInputs] = useState(initInputs)
    const { title, description } = inputs

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={title} 
                placeholder="Title" 
                onChange={handleChange} />
            <input 
                type="text" 
                name="description" 
                value={description} 
                placeholder="Description" 
                onChange={handleChange} />
            <button>Add Issue</button>
        </form>
    )
}