import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import { Link } from "react-router-dom";
import "./index.css";

function NoMatch() {

   
    return (
        <div>
            <HeroImage image="./images/space2.jpg" randomQuote={true} animate={true}/>
            <ContentArea>
                <div className="row">
                    <div className="jumbotron mx-auto">
                        <h1 className="display-4 d-table mx-auto">Oh No! Theres nothing here!</h1>
                        <hr className="my-4" />
                        <img src="./images/kermitthenomatchfrog.gif" alt="a scared kermit" className="mx-auto d-block"></img>
                        
                        <p className="lead mx-auto d-table mt-2 four-hover" style={{ fontSize: "2.5rem"}}>
                            <Link to="/home">Go Home</Link>
                        </p>
                    </div>
                </div>
            </ContentArea>
        </div>
    );
}

export default NoMatch;