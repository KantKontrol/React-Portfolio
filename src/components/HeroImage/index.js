import React from "react";
import HeroText from "../HeroText";
import "./index.css";

const preSetQuotes = [
    "“Talk is cheap. Show me the code.” - Linus Torvalds",
    "“Truth can only be found in one place: the code.” - Robert C. Martin",
    "“Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.” - Alan J. Perlis",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Make it work, make it right, make it fast.” – Kent Beck"
];


class HeroImage extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
            title: preSetQuotes[0]
        }
    }

     
 iterateText = () => {
        let currentIteration = 1;

        this.interval = setInterval(() => {

            let newTitle = "";

            if(currentIteration > preSetQuotes.length-1){
                currentIteration = 0;
            }
            
            newTitle = preSetQuotes[currentIteration];
            this.setState({ title: newTitle });
    

            currentIteration+=1;
        }, 6000);
    }


    componentDidMount(){
        if(this.props.animate){
            this.iterateText();
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }


    render(){
        return (
            <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.props.image})` }}>
                <div className="hero-text">
                    {this.props.randomQuote ? <HeroText text={this.state.title} /> : console.log("QuoteNotAdded")}
                </div>
            </div>
        );
    }
}

export default HeroImage;