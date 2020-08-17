import React from "react";
import "./index.css";

function BorderedImage(props){
    return (
        <div className="col-lg-4 col-md-4 col-xl-3">
            <img className="img-fluid port-picture d-block mx-auto mb-2" src={props.src} alt={props.alt}></img>
        </div>
    );
}

export default BorderedImage;
