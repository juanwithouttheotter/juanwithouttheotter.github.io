import React from 'react';
import PortfolioCard from "../components/PortfolioCard";
import PhotoME from "../assets/images/profile-photo-me.jpg";


class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <PortfolioCard
                    title="test"
                    github="test@github.com"
                    link="linktest"
                    image={PhotoME}
                />
                portfolio
            </div>
        )
    }
}

export default Portfolio;