import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm.js"
import {UserContext} from "../context/UserProvider.js"

export default function Auth() {
    const initInputs = { username: "", password: "" }
    const [inputs, setInputs] = useState(initInputs)
    const [toggleForm, setToggleForm] = useState(false)

    const { signup, login } = useContext(UserContext)

    function toggle() {
        setToggleForm(prev => !prev)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prev => ({
            ...prev,
            [name] : value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    return (
        <div>
            {
                !toggleForm ?
                <>
                    <AuthForm
                        handleChange={handleChange} 
                        handleSubmit={handleSignup} 
                        inputs={inputs}
                        btnTxt="Sign Up" />
                    <p onClick={toggle}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin} 
                        inputs={inputs}
                        btnTxt="Login" />
                    <p onClick={toggle}>Not a member?</p>
                </>
            }
        </div>
    )
}