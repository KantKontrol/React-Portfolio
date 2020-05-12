import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";


function Home() {
    return (
        <ContentArea>
            <div className="row">
                <div className="col-12">
                    <HeroImage image="./space.jpg" randomQuote={true} animate={true}/>
                </div>
            </div>

        </ContentArea>
    );
}

export default Home;