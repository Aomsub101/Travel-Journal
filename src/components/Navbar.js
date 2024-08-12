import React from "react";
import icon from "../images/Fill 213.png"

function Navbar() {
    return(
        <nav>
            <img src={icon} className="nav--icon" alt="earth icon."/>
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}

export default Navbar;