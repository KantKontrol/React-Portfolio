import React, { useState, useEffect } from "react";
import HeroText from "../HeroText";
import "./index.css";

function HeroImage(props) {

    const [title, setTitle] = useState("");

    const preSetQuotes = [
        "“Talk is cheap. Show me the code.” - Linus Torvalds",
        "“Truth can only be found in one place: the code.” - Robert C. Martin",
        "“Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.” - Alan J. Perlis"
    ];

    useEffect(() => {

        if(props.randomQuote){ //if the random quote prop was set to true
            if(props.quotes){ //if they passed in an array of quotes to use
    
            }
            else { //otherwise grab a preset one
                let ran = Math.floor(Math.random() * preSetQuotes.length);
                setTitle(preSetQuotes[ran]);
            }
        }

    }, [props.quotes, props.randomQuote, preSetQuotes])

    
    return (
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})` }}>
            <div className="hero-text">
                {props.randomQuote ? <HeroText text={title} /> : console.log("QuoteNotAdded")}
            </div>
        </div>
    );
}

export default HeroImage;