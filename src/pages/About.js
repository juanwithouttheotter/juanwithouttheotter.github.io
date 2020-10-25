import React from 'react';
import Image from "react-bootstrap/Image";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from '../components/Row';
import PhotoME from "../assets/images/profile-photo-me.jpg";

function About() {
    return (
        <Container fluid="true"  addclass=" my-4" >
            <Row>
                <Col size="md-3">
                    <h2 className="text-center">About Juan</h2>
                    <Image src={PhotoME} rounded thumbnail/>
                </Col>
                <Col size="md-8">
                <p>
                    Hello! My name Juan M. Osorio, full-stack Web Developer. I have experience working with RESTful API's, 
                    creating and using MySQL databases, creating and working with MongoDB and Mongoose,and building Express applications. 
                    I have worked with ES6, ES5, and vanilla javascript, libraries such as jQuery, Bootstrap, Moment.js, and more.
                    To quote Aristotle, "The more you know, the more you realize you don't know." and though I am still new
                    to web development and coding, the knowledge and experience I have gained thus far
                    motivates me to want to learn more and dive deeper into the wonderous world that is web development.
                </p>
                <p>
                    I currently hold a bachelors degree in music education 
                    through VanderCook College of Music. For the last five years, I have taught at the elementary level and held various
                    leadership roles at the different schools I've taught. Through this experience I have learned a lot
                    about myself, my work, and the direction in which I want to drive my future.
                </p>
                <p>
                    After attempting to make my life easier by creating an automated way of producing my lesson plans
                    using excel spreadsheets, I began to looking into web development. Through the suggestions of my
                    partner, who is a site reliability engineer, and a friend, who has gone through the Northwestern Full-Stack Web Development 
                    certification program, I found myself with an increased desire to learn more about web dev and programming.
                    Though I was successful at what I call my "Lesson Plan Machine" the end product was not practical,
                    it was severly limited and knew more could be done... just not with excel. Thus, began my web
                    development journey.</p>
                
                </Col>
            </Row>
        </Container>
    )
}

export default About;