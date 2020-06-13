import React from "react";
import "./index.css";
import HeaderText from "../HeaderText";

export default function ProjectJumbotron(props){
    
    
    
    return (
        <div className="col-lg-8 mt-2 mx-auto jumbo-style" style={{overflow: "hidden"}}>
            <div className="row" style={{height: 400 + "px"}}>
                <div className="col-lg-6" style={{overflow: "hidden"}}>
                    <div className="proj-image" style={{backgroundImage: props.src}}></div>
                </div>
                <div className="col-lg-6" style={{overflow: "hidden"}}>
                    <HeaderText text="Title" />
                    <div className="proj-text">

                    </div>
                </div>
            </div>
            <div className="row mt-2" style={{height: 200 + "px"}}>
                <div className="col-lg-2"></div>
                <div className="col-lg-10 proj-desc" >

                </div>
            </div>
        </div>
    );
}