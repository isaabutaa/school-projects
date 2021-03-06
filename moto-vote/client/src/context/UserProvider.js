import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        motoPosts: [] 
    }
    const [userState, setUserState] = useState(initState)

    function signup(userCredentials) {
        axios.post("/auth/signup", userCredentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user, 
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(userCredentials) {
        axios.post("/auth/login", userCredentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            motoPosts: []
        })
    }

    function getMotoPosts() {
        userAxios.get("/api/motos/user")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    motoPosts: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addMotoPost(newMotoPost) {
        userAxios.post("/api/motos", newMotoPost)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    motoPosts: [...prevUserState.motoPosts, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteMotoPost(postId) {
        userAxios.delete(`api/motos/${postId}`)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    motoPosts: prevUserState.motoPosts.map(post => post._id !== postId)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                getMotoPosts,
                addMotoPost,
                deleteMotoPost
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}