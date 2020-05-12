import React from "react";
import "./index.css";

function HeroImage(props) {

    let title = "";

    const preSetQuotes = [
        "“Talk is cheap. Show me the code.” - Linus Torvalds",
        "“Truth can only be found in one place: the code.” - Robert C. Martin",
        "“Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.” - Alan J. Perlis"
    ];

    if(props.randomQuote){ //if the random quote prop was set to true
        if(props.quotes){ //if they passed in an array of quotes to use

        }
        else { //otherwise grab a preset one
            let ran = Math.floor(Math.random() * preSetQuotes.length);
            title = preSetQuotes[ran];
        }
    }


    return (
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})` }}>
            <div className="hero-text">
                {props.randomQuote ? <h2 className={props.animate ? `animateFadeIn` : ``}>{title}</h2> : console.log("QuoteNotAdded")}
                <button onClick={() => props.buttonOnClick}>{props.buttonText}</button>
            </div>
        </div>
    );
}

export default HeroImage;