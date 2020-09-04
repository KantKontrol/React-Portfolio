import React from "react";
import { Link,  useLocation } from "react-router-dom";
import "./index.css";
//Need to adjust toggler to be centered


class Navbar extends React.Component {

    constructor(){ 
        super();

        this.state = {
            location:  window.location.href
        }
    }

 
    componentDidMount() {
        let hideNav = document.createElement('script');

        hideNav.src = "/util/hideNav.js";

        document.body.append(hideNav);
    }


    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-sm fixed-top un-animate">
                <div className="mx-auto navbarGrow navbarColor"> 
                        <ul className="cusNav">
                            <li className="nav-item d-flex flex-row mx-auto">
                                <Link className={this.location === "/home" ? "nav-link current-page" : "nav-link" } to="/home">Home</Link>
                                <Link className={this.location === "/portfolio" ? "nav-link current-page" : "nav-link" } to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link className={this.location === "/contact" ? "nav-link current-page" : "nav-link" } to="/contact">Contact</Link>
                            </li>
                        </ul>
                </div>
                
            </nav>
        );
    }
}

export default Navbar;