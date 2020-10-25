import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import passgen from "../../assets/images/pass-gen-image.png";



function PortfolioCard(props) {
    return (
        <Card style={{ width: '12rem', marginRight: '4rem', marginTop: '4rem' }}>
            <Card.Img variant="top" src={require(`../../assets/images/${props.image}.png`)} alt={props.altTag} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <Card.Link href={`https://juanwithouttheotter.github.io/${props.github}`}>Click here to check out the app</Card.Link>
                <Card.Link href={`https://github.com/juanwithouttheotter/${props.github}`}>Checkout the code on Github!</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default PortfolioCard;