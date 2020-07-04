import React from  "react";
import "./index.css";
import HeaderText from "../HeaderText";


export default function SkillsPane(props){

    return (
        <div className="skills-style">
            <div className="row">
                <HeaderText text="Skills" />
            </div>

            <div className="row">
                <div className="col-sm">

                </div>
                

                
                <div className="col-sm border-background">
                    <ul>
                    {
                        props.skillOne.length > 0 ? props.skillOne.map(e => {
                            return <li className="list-style">{e}</li>
                        }) : <div>No Skill</div>
                    }
                    </ul>
                </div>
                <div className="col-sm border-background">
                    <ul>
                    {
                        props.skillTwo.length > 0 ? props.skillTwo.map(e => {
                            return <li className="list-style">{e}</li>
                        }) : <div>No Skill</div>
                    }
                    </ul>
                </div>
            
                <div className="col-sm">
                    
                    </div>
            </div>

        </div>
    );
}