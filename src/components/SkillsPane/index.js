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
                <div className="col-sm" style={{ backgroundColor: "green"}}>
                    {
                        props.skillOne.length > 0 ? props.skillOne.map(e => {
                            return <div>{e}</div>
                        }) : <div>No Skill</div>
                    }
                </div>
                <div className="col-sm" style={{ backgroundColor: "blue"}}>
                {
                        props.skillTwo.length > 0 ? props.skillTwo.map(e => {
                            return <div>{e}</div>
                        }) : <div>No Skill</div>
                    }
                </div>
            </div>

        </div>
    );
}