import React from "react"

export default function AuthForm(props) {
    const { submit, btnTxt } = props

    function handleSubmit(e) {
        e.preventDefault()
        // submit()
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                // value={username} 
                placeholder="Username" 
            />
            <input 
                type="text" 
                name="password" 
                // value={password} 
                placeholder="Password" 
            />
            <button>{btnTxt}</button>
        </form>
    )
}