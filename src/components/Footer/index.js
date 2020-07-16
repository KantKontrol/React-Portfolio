import React from "react";
import Contactbar from "../Contactbar";
import "./index.css";

function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-text">
                    Created By Nicholas DeRissio
                </div>
                <Contactbar />
                <a href="https://www.codewars.com/users/KantKontrol"><img src="https://www.codewars.com/users/KantKontrol/badges/small" alt="codewars" rel="noopener" /></a>
            </div>
        </footer>
    );
}

export default Footer;