import React from "react"

export default function AuthForm(props) {
    return (
        <form>
            <input 
                type="text" 
                name="username" 
                placeholder="Username" 
            />
            <input 
                type="text" 
                name="password" 
                placeholder="Password" 
            />
            <button>{btnTxt}</button>
        </form>
    )
}