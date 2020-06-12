import React from "react";
import "./index.css";


export default function TextBox(props){
    return (
        <div className="text-box">
            {props.text ? props.text : "this is empty"}
        </div>
    );
}