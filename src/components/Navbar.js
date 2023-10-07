import React from 'react'
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} />
            </div>
            <div className="rightSide">
                right side
            </div>
        </div>
    )
}

export default Navbar;