import React from 'react'
import './sidebar.css'
import {Link} from "react-router-dom"

const sidebar = () => {
    return (
        <div className="sidebar">
            <Link className="active" href=" ">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about">About</Link>
            <Link href="/sign_up">Sign In</Link>
            <Link href="/sign_up">SignUp</Link>
        </div>
    )
}

export default sidebar