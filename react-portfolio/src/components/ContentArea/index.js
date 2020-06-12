import React from "react";
import "./index.css";

function ContentArea(props) {
    return (
        <div className="container content">
            {props.children}
        </div>
    );
}

export default ContentArea;