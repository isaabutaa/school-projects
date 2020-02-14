import React, { useState } from "react"

import AuthForm from "./AuthForm.js"

export default function Auth() {
    const initInputs = { username: "", password: "" }
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        // signup
    }

    function handleLogin(e) {
        e.preventDefault()
        // login
    }

    return (
        <div>
            { !toggle ?
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnTxt="Sign up" />
                    <p onClick={() => setToggle(prevToggle => !prevToggle)}>Already a member?</p>
                </>
            :
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnTxt="Login" />
                    <p onClick={() => setToggle(prevToggle => !prevToggle)}>Not a member?</p>
                </>
            }
        </div>
    )
}