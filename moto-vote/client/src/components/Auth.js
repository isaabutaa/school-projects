import React, { useState } from "react"
import AuthForm from "./AuthForm.js"

export default function Auth() {
    const [toggleForm, setToggleForm] = useState(false)

    function toggle() {
        setToggleForm(prev => !prev)
    }

    function handleSignup() {
        // signup
    }

    function handleLogin() {
        // login
    }

    return (
        <div>
            {
                !toggleForm ?
                <>
                    <AuthForm 
                        submit={handleSignup} 
                        btnTxt="Sign Up" />
                    <p onClick={toggle}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                        submit={handleLogin} 
                        btnTxt="Login" />
                    <p onClick={toggle}>Not a member?</p>
                </>
            }
        </div>
    )
}