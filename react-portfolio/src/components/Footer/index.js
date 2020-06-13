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
            </div>

        </footer>
    );
}

export default Footer;