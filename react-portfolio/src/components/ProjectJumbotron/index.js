import React from "react";
import "./index.css";
import HeaderText from "../HeaderText";

export default function ProjectJumbotron(props){
    
    
    return (
        <div className="col-lg-8 mt-2 mx-auto jumbo-style" style={{overflow: "hidden"}}>
            <div className="row">
                <div className="col-lg-6" style={{overflow: "hidden"}}>
                    <div className="proj-image" style={{backgroundImage: props.src}}></div>
                </div>
                <div className="col-lg-6" style={{overflow: "hidden"}}>
                    <HeaderText text={props.title} />
                    <div className="proj-technology mx-auto">
                        {props.techUsed.map((e, i) =>  i < props.techUsed.length-1 ? e + " | " : e )}
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-6 proj-desc" >
                    Quis est consectetur esse magna duis ad. Ea dolore consequat sit adipisicing tempor qui exercitation duis. Laborum cupidatat cillum nisi reprehenderit aliqua ullamco exercitation proident nulla dolor eu consectetur."

                </div>
                <div className="col-lg-6  my-auto">
                    <div className="button-holder mx-auto">
                        <button type="button" className="button-style"><i className="fab fa-github"></i> Github</button>
                        <button type="button" className="button-style"><i className="far fa-eye"></i> Deployed App</button>
                    </div>

                </div>
            </div>
        </div>
    );
}