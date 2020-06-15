import React from "react";
import ContentArea from "../ContentArea";
import HeroImage from "../HeroImage";
import ProjectJumbotron from "../ProjectJumbotron";
import Fade from "react-reveal/Fade"


function Portfolio() {

    let projects = [
        {
            src: "./images/port/Waypoint.jpg",
            title: "Waypoint",
            techUsed: ["ReactJS", "SocketIO", "Sequelize", "Bootstrap", "ExpressJS"],
            desc: "In this group project I served as a Back End Developer. Creating the Database models, as well as API routes. I also built the Real-Time Chat functionality in SocketIO for this app.",
            github: "https://github.com/WarriorofZarona/media-matcher",
            deployed: "https://ancient-dusk-51587.herokuapp.com/"
        },
        {
            src: "./images/port/in2uned.jpg",
            title: "In2uned",
            techUsed: ["Handlebars", "ExpressJS", "Passport", "Sequelize", "Bootstrap"],
            desc: "In2uned was a Group Project where I served as Project Lead as well as Backend Dev. This is a website where you can express your opinion about music. Users can search for songs, write a review, choose a star rating, and then share it with the world!",
            github: "https://github.com/KantKontrol/In2uned",
            deployed: "http://quiet-thicket-75299.herokuapp.com/"
        },
        {
            src: "./images/port/ConcertGlobal.jpg",
            title: "Concert Global",
            techUsed: ["HTML", "JS", "Materialize", "JQuery"],
            desc: "This was a group project where I served as Project Lead, as Well as Back End/Front End Dev. Concert Global is a Ticket Aggregator, pulling ticket data from two seperate APIs. Providing the user with as much choice for ticket purchase as possible. Site also uses current location to grab concerts in user' area and display that information in the sidebar.",
            github: "https://github.com/KantKontrol/ConcertFinder",
            deployed: "https://kantkontrol.github.io/ConcertFinder/"
        },
        {
            src: "./images/port/EmployeeDirectory.jpg",
            title: "Employee Directory",
            techUsed: ["ReactJS", "Bootstrap"],
            desc: "This is a simple project I had done in React. It has a simple sort functionality in the table where it sorts by last name, and you can also search by last name in real time.",
            github: "https://github.com/KantKontrol/Employee-Directory",
            deployed: "https://pure-journey-86666.herokuapp.com/"
        },
        {
            src: "./images/port/ReactBooks.jpg",
            title: "React Book Search",
            techUsed: ["ReactJS", "MongoJS", "Bootstrap"],
            desc: "This was a solo assignment. The Application allows you to search Google Books API and either view the select book on the google site, or save it for later in the saved section of the site.",
            github: "https://github.com/KantKontrol/React-BookSearch",
            deployed: "https://mighty-island-27011.herokuapp.com/search"
        },
        {
            src: "./images/port/CodeQuiz.jpg",
            title: "Code Quiz",
            techUsed: ["HTML", "JS", "Bootstrap"],
            desc: "This was a solo project. A basic webpage that quizzes the user with pre-set Javascript questions. Give it a try and see how you fare!",
            github: "https://github.com/KantKontrol/Code-Quiz",
            deployed: "https://kantkontrol.github.io/Code-Quiz/"
        }
    ];


    


    return (
        <div>
            <HeroImage image="./images/space5.jpg" randomQuote={true} animate={false} quotes={["Projects"]}/>
            <ContentArea>
                <div className="row" style={{margin: 10 + "px"}}>
                    <Fade bottom>
                        {projects.map(e => {
                            return <ProjectJumbotron src={e.src} title={e.title} techUsed={e.techUsed} desc={e.desc} github={e.github} deployed={e.deployed}/>
                        })}
                    </Fade>
                </div>
            </ContentArea>
        </div>
    );
}

export default Portfolio;