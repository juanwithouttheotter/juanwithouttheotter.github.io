import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";



function PortfolioCard(props) {
    return (
        <Card style={{ width: '18rem', margin: '2rem' }} bg="secondary" text="light" border="dark">
            <Card.Img style={{height: '45%'}} variant="top" src={require(`../../assets/images/${props.image}.png`)} alt={props.altTag} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>  
                <Button style={{marginBottom: '0.5rem'}} variant="outline-light" size='sm' href={`https://juanwithouttheotter.github.io/${props.github}`}>Check out the app</Button>
                <Button style={{marginBottom: '0.3rem'}} variant="outline-light" size='sm' href={`https://github.com/juanwithouttheotter/${props.github}`}>Checkout the code!</Button>
                
            </Card.Body>
        </Card>
    );
}

export default PortfolioCard;