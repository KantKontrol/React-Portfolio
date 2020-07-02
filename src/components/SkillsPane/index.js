import React from  "react";
import "./index.css";


export default function SkillsPane(props){

    return (
        <div className="row skills-style">
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
    );
}