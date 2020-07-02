import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import BorderedContainer from "../BorderedContainer";
import BorderedImage from "../BorderedImage";
import TextBox from "../TextBox";
import Fade from "react-reveal/Fade";
import HeaderText from "../HeaderText";
import SkillsPane from "../SkillsPane";


function Home() {

    let text = "Programming is my passion. In todays day and age, it is a passion that is forever evolving. Constantly learning, constantly problem solving, We must evolve with it or get left behind. We must also ask ourselves as programmers 'How do we push the envelope further?', for we will forever have the power of creating what the imagination provides, as well as what once was not."
    let text2 = "When we work together, we will always be working for the best possible solutions, with nothing short of diligence, persistence, and elegance. Together, let's Push the Envelope."

    return (
        <div>
            <HeroImage image="./images/space2.jpg" randomQuote={true} animate={true}/>
            <ContentArea>

                <div className="row">
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-10">
                        <HeaderText text="Nicholas DeRissio"/>
                        <HeaderText text="Full Stack Web Developer"/>
                    </div>
                    <div className="col-lg-1">

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-1">
                            
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <BorderedImage src="./images/mich.jpg" alt="picture of me" col={3}></BorderedImage>
                
                            <BorderedContainer col={8}>
        
                                <Fade bottom>
                                    <TextBox text={text} />
                                    <TextBox text={text2} />
                                </Fade>

                            </BorderedContainer>
                        </div>
                    </div>
                    <div className="col-lg-1">
                            
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-1">
                            
                    </div>
                    <div className="col-lg-10">
                        <SkillsPane skillOne={["HTML", "CSS", "Javascript/ES6", "React", "Handlebars"]} skillTwo={["NodeJS", "ExpressJS", "MongoDB", "mySQL", "REST API"]} />
                    </div>
                    <div className="col-lg-1">
                            
                    </div>
                </div>

                

            </ContentArea>
        </div>
    );
}

export default Home;