import React from "react"

export default function AuthForm(props) {
const {
    handleChange,
    handleSubmit,
    btnTxt,
    errMsg,
    inputs: {
        username, 
        password
    }
} = props

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                className="form-child"
                type="text" 
                name="username" 
                value={username}
                placeholder="Username" 
                onChange={handleChange}
            />
            <input 
                className="form-child"
                type="text" 
                name="password" 
                value={password}
                placeholder="Password"
                onChange={handleChange} 
            />
            <button className="form-child">{btnTxt}</button>
            <p style={{color: "red"}}>{ errMsg }</p>
        </form>
    )
}