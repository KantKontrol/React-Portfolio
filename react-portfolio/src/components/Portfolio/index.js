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
                    <ProjectJumbotron title="Password Generator" techUsed={["HTML", "JS", "CSS"]}/>
                </div>
                


            </ContentArea>
        </div>
    );
}

export default Portfolio;