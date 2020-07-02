import React from "react";
import { MDBAnimation } from "mdbreact";
import shortid from "shortid";
import "./index.css";

function HeroText(props){

    return (
        <MDBAnimation key={shortid.generate()} type="fadeIn" duration="2s">
                <p className="cusFont ">{props.text}</p>
        </MDBAnimation>
    );
}

export default HeroText;