import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm.js"
import { UserContext } from "../context/UserProvider.js"

const initInputs = { username: "", password: "" }

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
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

    function toggleForm() {
        setToggle(prevToggle => !prevToggle)
        resetAuthErr()
    }

    const text = !toggle ? "Sign up" : "Login"

    return (
        <div className="welcome-page">
            <img className="funny-img" src="https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
            <p className="photo-cred">Photo by <a href="https://unsplash.com/@dominik_photography" rel="noopener noreferrer" target="_blank">Dominik Vanyi</a></p>
            <h1>Welcome to <span className="blahg-head">Blahg Heads</span></h1>
            <h2>Where <span className="blah">'Blah'</span> is the standard.</h2>
            <h1>{text} Page</h1>
            { !toggle ?
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        errMsg={errMsg}
                        btnTxt="Sign up"
                    />
                    <p onClick={toggleForm} style={{textDecorationLine: "underline"}}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        errMsg={errMsg}
                        btnTxt="Login"
                    />
                    <p onClick={toggleForm} style={{textDecorationLine: "underline"}}>Not a member?</p>
                </>
            }
        </div>
    )
}