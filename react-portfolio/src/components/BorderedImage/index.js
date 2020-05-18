import React from "react";
import "./index.css";

function BorderedImage(props){
    return (
        <img className="bImage" src={props.src} alt={props.alt}></img>
    );
}

export default BorderedImage;