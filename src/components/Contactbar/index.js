import React from "react";
import ContactDisplay from "../ContactDisplay";
import "./index.css";


export default function Contactbar(props){

    return (
        <div className="contact-bar">
            <div className="center">
                    <ContactDisplay src="fab fa-github" href="https://github.com/KantKontrol" />
                    <ContactDisplay src="fab fa-linkedin" href="https://www.linkedin.com/in/nicholas-derissio"/>
                    <ContactDisplay src="fa fa-file-text" href="/images/port/resume.pdf" />
                    <ContactDisplay src="fab fa-instagram" href="https://www.instagram.com/nicholas.uber.dev/" />
            </div>
        </div>
    );
}