import React from "react";
import "./index.css";

export default function ContactDisplay(props){


    let { src, text, href } = props;


    return (
        <a className="contact-display" target="_blank" rel="noopener noreferrer" href={href}>
            <i className={src}></i>
        </a>
    );
}