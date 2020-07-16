import React from "react";
import "./index.css";

export default function Loader(){

    

    return (
        <div style={{ width: 100 + "%", height: 100 + "%", backgroundColor: "darkgray"}}>
            <div className="loader mx-auto" style={{ backgroundImage: `url(${"./images/load.gif"})`}}></div>
        </div>
    );
}