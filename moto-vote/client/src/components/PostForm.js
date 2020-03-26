import React from "react"

export default function PostForm() {
    return (
        <form className="post-form">
            <input 
                type="text" 
                name="title" 
                // value={title} 
                placeholder="Title" 
            />
            <input 
                type="text" 
                name="description" 
                // value={description} 
                placeholder="Description" 
            />
            <input 
                type="text" 
                name="imgUrl" 
                // value={imgUrl} 
                placeholder="Paste image url" 
            />
            <button>btnTxt</button>
        </form>
    )
}