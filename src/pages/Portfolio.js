import React from 'react';
import PortfolioCard from "../components/PortfolioCard";
import appRepos from "../assets/data/appRepos.json"
import { Container, Row } from 'react-bootstrap';

class Portfolio extends React.Component {

    render() {
        let cards = appRepos.length > 0 && appRepos.map((repoObj, i) => {
            return (
                <PortfolioCard
                    key={i}
                    title={repoObj.projectTitle}
                    description={repoObj.projectDesc}
                    github={repoObj.urlTag}
                    link={repoObj.urlTag}
                    image={repoObj.imgRoute}
                    altTag={repoObj.altTag}
                />
            )
        })
        return (
            <Container>
                <Row>
                {cards}
                </Row>
            </Container>
        )
    }
}

export default Portfolio;