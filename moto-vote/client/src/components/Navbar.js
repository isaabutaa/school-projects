import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
    const { logout } = props
    return (
        <div className="navbar">
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/moto-posts">MotoPosts</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}