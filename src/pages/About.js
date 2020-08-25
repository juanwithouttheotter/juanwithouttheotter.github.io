import React from 'react';
import Container from "../components/Container";
import Col from "../components/Col";
import Row from '../components/Row';

function About() {
    return (
        <Container fluid="true">
            <Row fluid="true">
                <Col size="md-4">
                    <h2>About Juan</h2>

                </Col>
                <Col size="md-8">
                    <p>
                        Hello! My name Juan Osorio. and I am an aspiring web developer currently enrolled in Northwestern's
                        web development bootcamp. I currently hold a bachelors degree in music education through VanderCook
                        College of Music. For the last five years, I have taught at the elementary level and held various
                        leadership roles at the different schools I've taught. Through this experience I have learned a lot
                        about myself, my work, and the direction in which I want to drive my future.
                    </p>

                    <p>
                        After attempting to make my life easier by creating an automated way of producing my lesson plans
                        using excel spreadsheets, I began to looking into web development. Through the suggestions of my
                        partner, who is a software engineer, and a friend, who has gone through the Northwestern Bootcamp, I
                        found myself heavily considering going into the field.
                        Though I was successful at what I call my "Lesson Plan Machine" the end product was not practical,
                        it was severly limited and knew more could be done... just not with excel. Thus, began my web
                        development journey.
                    </p>
                    <p>
                        I am now 17 weeks into the program have learned a plethora of new skills such as working with
                        RESTful API's, creating and using MySQL databases, creating and working with MongoDB and Mongoose,
                        and building Express applications. I have worked with ES6, ES5, and vanilla javascript, libraries
                        such as jQuery, Bootstrap, moment, and more.
                        To quote Aristotle, "The more you know, the more you realize you don't know." and though I am still new
                        to web development and coding, the knowledge and experience I have gained thus far
                        motivates me to want to learn more and dive deeper into web development.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;