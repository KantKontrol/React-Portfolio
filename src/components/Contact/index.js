import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import ContactJumbo from "../ContactJumbo";

function Contact() {

    return (
        <div>
            <HeroImage image="./images/space5.jpg" randomQuote={true} animate={true}/>

            <ContentArea>
                <div className="row mb-2">
                    <div className="col-lg-8 col-s-12 mx-auto">
                        <ContactJumbo header="Ready to connect?" lead="Contact me on one of several platforms below..."/>
                    </div>
                </div>

            </ContentArea>
        </div>
    );
}

export default Contact;