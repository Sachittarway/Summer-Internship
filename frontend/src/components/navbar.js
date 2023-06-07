import React from "react";
import logo from "./logo.png"
import "./navbar.css"

function Navbar() {
    return(
        <div>
            <nav>
                <div>
                    <img src={logo} alt="Logo" style={{height:"50px"}}/>
                </div>
                <div id="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;