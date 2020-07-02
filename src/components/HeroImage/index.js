import React, { useState, useEffect } from "react";
import HeroText from "../HeroText";
import "./index.css";

function HeroImage(props) {

    let [title, setTitle] = useState("");
    let [anim, setAnim] = useState(true);
    let currentIteration = 1;

    const preSetQuotes = [
        "“Talk is cheap. Show me the code.” - Linus Torvalds",
        "“Truth can only be found in one place: the code.” - Robert C. Martin",
        "“Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.” - Alan J. Perlis",
        "“Simplicity is the soul of efficiency.” – Austin Freeman",
        "“Make it work, make it right, make it fast.” – Kent Beck"
    ];

    useEffect(() => {
        let mounted = true;


        if(mounted){
            if(props.randomQuote ){ //if the random quote prop was set to true
                if(props.quotes){ //if they passed in an array of quotes to use
                    setTitle(props.quotes[0]);
                }
                else { //otherwise grab a preset one
                    setTitle(preSetQuotes[0]);
                }
            }
    
            if(anim && props.animate){
                iterateText();
                setAnim(false);
            }
        }

        return () => mounted = false;
    }, [])

    function iterateText(){
        setInterval(() => {

            let newTitle = "";

            if(currentIteration > preSetQuotes.length-1){
                currentIteration = 0;
            }
            
            newTitle = preSetQuotes[currentIteration];
            setTitle(newTitle);
    

            currentIteration+=1;
        }, 6000);
    }

    
    return (
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})` }}>
            <div className="hero-text">
                {props.randomQuote ? <HeroText text={title} iterateText={iterateText}/> : console.log("QuoteNotAdded")}
            </div>
        </div>
    );
}

export default HeroImage;