import React from "react";


export default function ContactDisplay(props){


    let { src, text, href } = props;


    return (
        <a href={href}>
            <img src={src} alt="..."/>
            {text}
        </a>
    );
}