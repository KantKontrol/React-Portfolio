import React from "react";
import ContactDisplay from "../ContactDisplay";
import "./index.css";


export default function Contactbar(props){

    return (
        <div className="contact-bar">
            <div className="center">
                    <ContactDisplay src="./images/GitHub-Mark-Light-32px.png" href="" text="Github" />
                    <ContactDisplay src="./images/LI-In-Bug.png" href="" text="LinkedIn" />
            </div>
        </div>
    );
}