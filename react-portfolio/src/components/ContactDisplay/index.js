import React from "react";
import "./index.css";

export default function ContactDisplay(props){


    let { src, text, href } = props;


    return (
        <a className="contact-display" href={href}>
            <img src={src} alt="..."/>
             {text}
        </a>
    );
}