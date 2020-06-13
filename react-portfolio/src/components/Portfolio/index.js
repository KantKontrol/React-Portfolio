import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import ProjectJumbotron from "../ProjectJumbotron";


function Portfolio() {
    return (
        <div>
            <HeroImage image="./images/space5.jpg" randomQuote={true} animate={false} quotes={["Projects"]}/>
            <ContentArea>
                <div className="row" style={{margin: 10 + "px"}}>
                    <ProjectJumbotron src="./images/port/in2uned.png" title="In2uned" techUsed={["HTML", "JS", "CSS"]} github="" deployed=""/>
                </div>
                


            </ContentArea>
        </div>
    );
}

export default Portfolio;