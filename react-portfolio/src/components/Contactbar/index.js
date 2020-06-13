import React from "react";
import ContactDisplay from "../ContactDisplay";
import "./index.css";


export default function Contactbar(props){

    return (
        <div className={props.col ? `col-lg-${props.col} contact-bar` : "col-lg-6 contact-bar"}>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <ContactDisplay src="./images/GitHub-Mark-Light-32px.png" href="" text="Github" />
                </div>
                <div className="col-lg-4">
                    <ContactDisplay src="./images/LI-In-Bug.png" href="" text="LinkedIn" />
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
}