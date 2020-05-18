import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import BorderedContainer from "../BorderedContainer";
import BorderedImage from "../BorderedImage";


function Home() {
    return (
        <div>
            <HeroImage image="./images/space.jpg" randomQuote={true} animate={true}/>
            <ContentArea>
                <div className="row">
                    <div className="col-12">
                    
                    </div>
                </div>

                <div className="row">
                    <BorderedContainer>
                            <BorderedImage src="./images/mich.jpg" alt="picture of me"></BorderedImage>
                        

                    </BorderedContainer>
                </div>
            </ContentArea>
        </div>
    );
}

export default Home;