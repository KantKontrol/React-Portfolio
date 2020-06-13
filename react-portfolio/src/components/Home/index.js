import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import BorderedContainer from "../BorderedContainer";
import BorderedImage from "../BorderedImage";
import TextBox from "../TextBox";
import HeaderText from "../HeaderText";
import Contactbar from "../Contactbar";


function Home() {

    let text = "In enim quis occaecat elit eu labore nisi ea laboris exercitation sint consectetur. Voluptate nostrud ullamco aliqua irure minim id. Proident dolore deserunt magna proident ullamco non pariatur reprehenderit Lorem. Cillum sunt consectetur proident Lorem ullamco aute irure nisi ex velit in cupidatat. Id commodo ex consequat cupidatat commodo ad. Exercitation amet proident occaecat voluptate veniam est cillum labore ex aliquip est incididunt esse nostrud."

    return (
        <div>
            <HeroImage image="./images/space2.png" randomQuote={true} animate={true}/>
            <ContentArea>
                <div className="row">
                    <div className="col-lg-12">
                        <HeaderText text="About" />
                    </div>
                </div>
                
                <div className="row">
                    <BorderedImage src="./images/mich.jpg" alt="picture of me" col={3}></BorderedImage>
                    <BorderedContainer col={8}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <TextBox text={text} />
                                    <TextBox text={text} />
                                </div>
                            </div>
                    </BorderedContainer>
                </div>


                <div className="row">
                        <div className="col-lg-12">
                            <HeaderText text="Contact me" />
                            <div className="row">
                                <div className="col-lg-3">

                                </div>
                                <div className="col-lg-6">
                                    <Contactbar />
                                </div>
                                <div className="col-lg-3">
                                    
                                </div>
                            </div>

                        </div>
                        

                </div>
            </ContentArea>
        </div>
    );
}

export default Home;