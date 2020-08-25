import React from "react";

function Container (props) {
    return (
        <div className={`container${props.fluid ? "-fluid"+props.addclass : ""+props.addclass}`} {...props} />
        );
}

export default Container;