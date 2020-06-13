import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import ProjectJumbotron from "../ProjectJumbotron";


function Portfolio() {

    let projects = [
        {
            src: "./images/port/in2uned.png",
            title: "In2uned",
            techUsed: ["HTML", "JS", "CSS"],
            desc: "In2uned uses an 0Auth2 Strategy with Spotify. This is a website where you can express your opinion about music",
            github: "https://github.com/KantKontrol/In2uned",
            deployed: "http://quiet-thicket-75299.herokuapp.com/"
        }
    ];


    return (
        <div>
            <HeroImage image="./images/space5.jpg" randomQuote={true} animate={false} quotes={["Projects"]}/>
            <ContentArea>
                <div className="row" style={{margin: 10 + "px"}}>
                    {projects.map(e => {
                        return <ProjectJumbotron src={e.src} title={e.title} techUsed={e.techUsed} desc={e.desc} github={e.github} deployed={e.deployed}/>
                    })}
                </div>
                


            </ContentArea>
        </div>
    );
}

export default Portfolio;