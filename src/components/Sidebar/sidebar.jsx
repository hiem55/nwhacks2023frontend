import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom"
import HeaderSocials from './headersocials'

const sidebar = () => {
    return (
        <div class="sidebar">
            <a class="active" href=" ">Home</a>
            {/*             <a href=./about>About</a> */}
            {/*             <a href="#sign up">Sign In</a> */}
            <li>
                <a href="/signUp">SignUp</a>
            </li>
            <HeaderSocials />
        </div>

    )
}

export default sidebar