import React from "react";
import "./index.css";
//Need to adjust toggler to be centered
function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm fixed-top">
            <div className="mx-auto navbarGrow navbarColor"> 
                    <ul className="cusNav">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;