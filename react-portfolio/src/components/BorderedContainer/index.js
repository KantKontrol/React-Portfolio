import React from "react";
import "./index.css";

function BorderedContainer(props){
    return (    
        <div className={props.col ? `col-lg-${props.col} mainStyle` : "col-lg-10 mainStyle"}>
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default BorderedContainer;