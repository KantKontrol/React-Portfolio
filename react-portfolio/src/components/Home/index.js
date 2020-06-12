import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import BorderedContainer from "../BorderedContainer";
import BorderedImage from "../BorderedImage";


function Home() {
    return (
        <div>
            <HeroImage image="./images/space2.png" randomQuote={true} animate={true}/>
            <ContentArea>

                <div className="row">

                    <BorderedImage src="./images/mich.jpg" alt="picture of me" col={6}></BorderedImage>
                    <BorderedContainer col={6}>
                            
                    
                    </BorderedContainer>
                </div>
            </ContentArea>
        </div>
    );
}

export default Home;