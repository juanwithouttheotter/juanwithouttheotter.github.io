import React from 'react';
import Image from "react-bootstrap/Image";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from '../components/Row';
import PhotoME from "../assets/images/Osorio_profile.jpg";

function About() {
    return (
        <Container fluid="true"  addclass=" my-4" >
            <Row>
                <Col size="md-3">
                    <Image src={PhotoME} rounded thumbnail/>
                </Col>
                <Col size="md-8">
                <p>
                    Hello! I'm Juan, a frontend web developer. I have led various projects that focused on enhancing user and developer experience.
                    Championed purchase order table overhaul for store employees, reducing duration of tasks and increasing productivity relating to receiving purchase orders.
                    Provided project support by assisting peers with content knowledge of scope, known bugs, and best practices increasing efficiency and expediting resolutions.
                    Led redesign of reusable components, typography components, iconography, and color palette to increase accessibility, atomic design alignment, and user experience in support of the design team.
                     
                    I have experience working with React.js, RESTful API's, MySQL databases, MongoDB and Mongoose,Express applications. Brief experience with Laravel/php and Django/python.
                </p>
                <p>
                    I currently hold a certification for full stack web development through Northwestern and bachelors degree in music education through VanderCook College of Music. 
                    Previously taught elementary music education and held various leadership roles. Through this experience I have learned a lot
                    about myself, my work, and the direction in which I want to drive my future.
                </p>
                
                </Col>
            </Row>
        </Container>
    )
}

export default About;