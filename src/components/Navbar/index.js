import React from "react";
import { Link,  useLocation } from "react-router-dom";
import "./index.css";
//Need to adjust toggler to be centered
function Navbar() {

    let location = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-sm fixed-top">
            <div className="mx-auto navbarGrow navbarColor"> 
                    <ul className="cusNav">
                        <li className="nav-item d-flex flex-row mx-auto">
                            <Link className={location === "/home" ? "nav-link current-page" : "nav-link" } to="/home">Home</Link>
                            <Link className={location === "/portfolio" ? "nav-link current-page" : "nav-link" } to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item mx-auto d-block">
                            <Link className={location === "/contact" ? "nav-link current-page" : "nav-link" } to="/contact">Contact</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;