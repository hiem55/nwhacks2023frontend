import React from 'react'
import './header.css'
import Logo from '../../Assets/Logo2.png'
const header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <div className="container header_container">
                <h5> </h5>
                {/* <HeaderSocials /> */}
            </div>
        </header>
    )
}

export default header