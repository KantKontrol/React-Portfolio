import React from "react";
import "./index.css";

export default function ContactDisplay(props){


    let { src, href, text, dblock } = props;

    if(!dblock){
        dblock = false;
    }


    return (
        <a className={ dblock ? `d-table list-display` : `contact-display`} target="_blank" rel="noopener noreferrer" href={href}>
            <i className={src}><div className="display-text">{text}</div></i>
        </a>
    );
}