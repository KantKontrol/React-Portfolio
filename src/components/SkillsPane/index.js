import React from  "react";
import "./index.css";
import HeaderText from "../HeaderText";


export default function SkillsPane(props){

    return (
        <div className="skills-style border-style">
            <div className="row">
                <HeaderText text="Skills" />
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-2">

                </div>
                

                
                <div className="col-lg-4 col-md-4 ">
                    <ul>
                    {
                        props.skillOne.length > 0 ? props.skillOne.map(e => {
                            return <li className="list-style">{e}</li>
                        }) : <div>No Skill</div>
                    }
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 ">
                    <ul>
                    {
                        props.skillTwo.length > 0 ? props.skillTwo.map(e => {
                            return <li className="list-style">{e}</li>
                        }) : <div>No Skill</div>
                    }
                    </ul>
                </div>
            
                <div className="col-lg-2 col-md-2">
                    
                    </div>
            </div>

        </div>
    );
}