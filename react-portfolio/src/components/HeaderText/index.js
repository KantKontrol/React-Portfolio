import React from "react";
import "./index.css";


export default function HeaderText(props){

    return (
        <h1 className="header-text">{props.text}</h1>
    );
}