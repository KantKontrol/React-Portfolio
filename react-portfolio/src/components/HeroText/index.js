import React from "react";
import { MDBAnimation } from "mdbreact";
import "./index.css";

function HeroText(props){
    return (
        <MDBAnimation type="fadeIn" duration="2s">
                <p className="cusFont">{props.text}</p>
        </MDBAnimation>
    );
}

export default HeroText;