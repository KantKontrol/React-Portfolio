import React from "react";
import "./index.css";
import HeaderText from "../HeaderText";

export default function ProjectJumbotron(props){
    //<div className="proj-image" style={{backgroundImage: `url(${props.src})`}}></div>
    
    return (
        <div className="col-lg-8 mt-2 mx-auto jumbo-style" style={{overflow: "hidden"}}>
            <div className="row" style={{margin: 5 + "px"}}>
                <div className="col-lg-6" style={{overflow: "hidden", padding: 0 + "px"}}>
                    <img src={props.src} alt="..." className="img-responsive my-auto" width="100%" height="100%" />
                    <div className="shadow" />
                </div>
                <div className="col-lg-6" style={{overflow: "hidden"}}>
                    <HeaderText text={props.title} />
                    <div className="proj-technology mx-auto">
                        {props.techUsed.map((e, i) =>  i < props.techUsed.length-1 ? e + " | " : e )}
                    </div>

                    <div className="col-lg-12 proj-desc" >
                        Quis est consectetur esse magna duis ad. Ea dolore consequat sit adipisicing tempor qui exercitation duis. Laborum cupidatat cillum nisi reprehenderit aliqua ullamco exercitation proident nulla dolor eu consectetur."

                    </div>
                </div>
            </div>
            <div className="row mt-2">

                <div className="col-lg-12  my-auto">
                    <div className="button-holder mx-auto">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="button-style"><i className="fab fa-github"></i> Github</button>
                        </a>
                        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="button-style"><i className="far fa-eye"></i> Deployed App</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}