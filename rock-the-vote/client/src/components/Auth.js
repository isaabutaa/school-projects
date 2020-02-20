import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm.js"
import { UserContext } from "../context/UserProvider.js"

export default function Auth(props) {
    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)
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

    return (
        <div>
            <h1>Rock the Vote</h1>
            { !toggle ?
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnTxt="Sign up"
                        errMsg={errMsg} />
                    <p onClick={toggleForm}>Already a member?</p>
                </>
            :
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnTxt="Login"
                        errMsg={errMsg} />
                    <p onClick={toggleForm}>Not a member?</p>
                </>
            }
        </div>
    )
}