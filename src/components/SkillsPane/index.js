import React from  "react";
import "./index.css";
import HeaderText from "../HeaderText";


export default function SkillsPane(props){

    return (
        <div className="skills-style ">


            <div className="row">
                <div className="col-lg col-md">

                </div>
                
                <div className="col-lg-7 col-md-7 border-style">
                    <div className="row">
                        <HeaderText text="Skills" />
                    </div>

                    <div className="row">
                        <div className="col-sm">        
                            <HeaderText text="Front-End"></HeaderText>                
                            <ul>
                            {
                                props.skillOne.length > 0 ? props.skillOne.map(e => {
                                    return <li key={e} className="list-style">{e}</li>
                                }) : <div>No Skill</div>
                            }
                            </ul>
                        </div>
                        <div className="col-sm">
                            <HeaderText text="Back-End"></HeaderText>
                            <ul>
                            {
                                props.skillTwo.length > 0 ? props.skillTwo.map(e => {
                                    return <li key={e} className="list-style">{e}</li>
                                }) : <div>No Skill</div>
                            }
                            </ul>               
                        </div>
                    </div>
                        

                </div>
            
                <div className="col-lg col-md">
                    
                </div>
            </div>

        </div>
    );
}