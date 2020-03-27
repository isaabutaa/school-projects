import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const initState = { 
        user: {}, 
        token: "", 
        motoPosts: [] 
    }
    const [userState, setUserState] = useState(initState)

    function signup(userCredentials) {
        axios.post("/auth/signup")
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}