import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img src="../assets/logo.png" alt="Logo"/>
            <div className="icons">
                <Link to="/"><img src="../assets/search.svg" alt="icon"/></Link>
                <Link to="/person"><img src="../assets/person.svg" alt="icon"/></Link>
                <Link to="/cart"><img src="../assets/cart.svg" alt="icon"/></Link>
                <Link to="/notification"><img src="../assets/notification.svg" alt="icon"/></Link>
            </div>
        </div>
    )
}

export default Header;
