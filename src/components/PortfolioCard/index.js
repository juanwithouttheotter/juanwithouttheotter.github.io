import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./style.css";

function PortfolioCard(props){
    return(
        <div className="PortfolioCard">
            <h3>{props.title}</h3>
            <Link to={props.link}>Click here to check out the app</Link>
            <Link to={props.github}/>
            <Image src={props.image} alt={props.title + "image"} rounded thumbnail></Image>
        </div>
    );
}

export default PortfolioCard;