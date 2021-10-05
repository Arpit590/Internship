import React from 'react'
import { Link } from 'react-router-dom';
import "./Options.css";


function Options() {
    return (
        <div className="options">
            <ul className="options__list">
                <li>
                    <Link to='/sales'>Sales</Link>
                </li>
                <li>
                    <Link to="/collections">Collections</Link>
                </li>
                <li>
                    <Link to="/clothing">Clothing</Link>
                </li>
                <li>
                    <Link to="/dresses">Dresses</Link>
                </li>
                <li>
                    <Link to="/hijabs">Hijabs</Link>
                </li>
                <li>
                    <Link to="/accessories">Accessories</Link>
                </li>
                <li>
                    <Link to="/collab">Collab</Link>
                </li>
            </ul>
        </div>
    )
}

export default Options
