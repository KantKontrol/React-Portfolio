import React from "react";
import "./index.css";

function BorderedImage(props){
    return (
        <div className={props.col ? `col-lg-${props.col} imageHolder` : 'col-lg-2 imageHolder'}>
            <img className="bImage" src={props.src} alt={props.alt}></img>
        </div>
    );
}

export default BorderedImage;