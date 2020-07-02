import React from "react";
import "./index.css";


export default function HeaderText(props){

    return (
        <div className="header-text">{props.text}</div>
    );
}