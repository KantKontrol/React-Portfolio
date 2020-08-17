import React from "react";
import "./index.css";
import ContactDisplay from "../ContactDisplay";

export default function ContactJumbo(props){

    let { header, lead } = props;


    return (
        <div className="jumbotron mx-auto">
            <h1 className="display-4">{header}</h1>
            <p className="lead">{lead}</p>
            <hr className="my-4" />
                    <ContactDisplay src="fab fa-github" href="https://github.com/KantKontrol" text="Github" dblock={true}/>
                    <ContactDisplay src="fab fa-linkedin" href="https://www.linkedin.com/in/nicholas-derissio" text="LinkedIn" dblock={true} />
                    <ContactDisplay src="far fa-file-alt" href="/images/port/resume.pdf" text="Resume" dblock={true}/>
                    <ContactDisplay src="fab fa-instagram" href="https://www.instagram.com/nicholas.uber.dev/" text="Instagram" dblock={true} />
        </div>
    );
}