import React, { useState, useContext }  from "react"
import { UserContext } from "../context/UserProvider.js"
import AddBlogPostForm from "./AddBlogpostForm.js"

export default function Post(props) {
    const {title, content, _id} = props
    const [toggleForm, setToggleForm] = useState(false)
    const { deletePost, editPost } = useContext(UserContext)

    function handleEditClick() {
        setToggleForm(prev => !prev)
    }

    return (
        <>
            { !toggleForm ?
            <div className="post">
                <h3>{title}</h3>
                <p>{content}</p>
                <button className="btn" onClick={handleEditClick}>Edit</button>
                <button className="btn" onClick={() => deletePost(_id)}>Delete</button>
            </div>
            :
            <>
                <AddBlogPostForm 
                    title={title} 
                    content={content}
                    submit={editPost} 
                    _id={_id}
                    btnTxt="Update Post"
                />
                <button className="btn" onClick={handleEditClick}>Close</button>
            </>
            }
        </>
    )
}