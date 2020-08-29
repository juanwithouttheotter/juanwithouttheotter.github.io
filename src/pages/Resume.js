import React from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faDna } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { } from '@fortawesome/free-solid-svg-icons';


function Resume() {
    return (
        <Container fluid="true" addclass=" my-5 text-center">
            <Row>
                
                <Col size="md">
                    <a href="https://www.linkedin.com/in/juan-osorio-5496201b4/">
                    <FontAwesomeIcon icon={faLinkedin} size="8x"/>
                    </a>
                </Col>
            </Row>
            <div className="my-5"></div>
            <Row>    
                <Col size="md">
                    <a href="">
                    <FontAwesomeIcon icon={faDownload} size="8x" />
                    </a>
                </Col>
                
            </Row>
            <div className="my-5"></div>
            <Row>
                
                <Col size="md">
                    <a href="https://github.com/juanwithouttheotter">
                    <FontAwesomeIcon icon={faGithub} size="8x" />
                    </a>
                </Col>
            </Row>
            <div className="my-5"></div>
            <Row>
                <Col size="md">
                    <a href="https://juanwithouttheotter.github.io/Movie-Weather-Solutions/">
                    <FontAwesomeIcon icon={faDna} size="8x" />
                    </a>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Resume;