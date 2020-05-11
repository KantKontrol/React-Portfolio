import React from "react";


function ContentArea(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default ContentArea;