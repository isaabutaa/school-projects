import React, { useState } from "react"

function BucketListForm(props) {
    const initObj = {title: "", description: "", completionYear: ""}
    const [userInput, setUserInput] = useState(initObj)

    function handleChange() {
        
    }

    return (
        <div>
            <form className="bucket-list-form">
                <input name="title" value={userInput.title} placeholder="title" onChange={handleChange} />
                <input name="description" value={userInput.description} placeholder="description" onChange={handleChange} />
                <input name="completionYear" value={userInput.completionYear} placeholder="complete by this year - eg 2025" onChange={handleChange} />
                <button>{ props.btnText }</button>
            </form>
        </div>
    )
}

export default BucketListForm