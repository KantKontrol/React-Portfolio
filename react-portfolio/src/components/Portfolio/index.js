import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";


function Portfolio() {
    return (
        <div>
            <HeroImage image="./images/space3.png" randomQuote={true} animate={false} quotes={["Projects"]}/>
            <ContentArea>


            </ContentArea>
        </div>
    );
}

export default Portfolio;