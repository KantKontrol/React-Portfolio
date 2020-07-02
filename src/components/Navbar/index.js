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
                        <li className="nav-item">
                            <Link className={location === "/home" ? "nav-link current-page" : "nav-link" } to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={location === "/portfolio" ? "nav-link current-page" : "nav-link" } to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;