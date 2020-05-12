import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import BorderedContainer from "../BorderedContainer";
import BorderedImage from "../BorderedImage";


function Home() {
    return (
        <ContentArea>
            <div className="row">
                <div className="col-12">
                    <HeroImage image="./images/space.jpg" randomQuote={true} animate={true}/>
                </div>
            </div>

            <div className="row">
                <BorderedContainer>
                        <BorderedImage src="./images/mich.jpg" alt="picture of me"></BorderedImage>
                    

                </BorderedContainer>
            </div>
        </ContentArea>
    );
}

export default Home;