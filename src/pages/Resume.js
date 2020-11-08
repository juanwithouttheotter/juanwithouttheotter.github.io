import React from 'react';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { } from '@fortawesome/free-solid-svg-icons';
import PDF from '../assets/Osorio-Juan-Resume.pdf';


function Resume() {
    return (
        <Container fluid="true" addclass=" my-5 text-center">
            <Row>
                <Col size="sm">
                    <a href="https://www.linkedin.com/in/juanosorio12/" title="linkedin" >
                        <FontAwesomeIcon icon={faLinkedin} size="4x" />
                    </a>
                </Col>
                <div className="my-5"></div>
                <Col size="sm">
                    <a href={PDF} download target="_blank" rel="noopener noreferrer" title="download resume">
                        <FontAwesomeIcon icon={faDownload} size="4x" />
                    </a>
                </Col>
                <div className="my-5"></div>
                <Col size="sm">
                    <a href="https://github.com/juanwithouttheotter" title="Github">
                        <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                </Col>
                <div className="my-5"></div>
            </Row>
        </Container>
    )
}

export default Resume;