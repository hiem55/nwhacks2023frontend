import React from 'react'
import './header.css'
import HeaderSocials from './headersocials'

const header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5> LIFE 180 WEBAPP</h5>
                <HeaderSocials />

            </div>
        </header>
    )
}

export default header