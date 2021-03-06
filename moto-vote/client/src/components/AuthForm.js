import React from "react"

export default function AuthForm(props) {
    const { 
        handleChange, 
        handleSubmit, 
        btnTxt, 
        inputs: {
            username, 
            password
        } 
    } = props

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                value={username} 
                placeholder="Username" 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="password" 
                value={password} 
                placeholder="Password" 
                onChange={handleChange}
            />
            <button>{btnTxt}</button>
        </form>
    )
}