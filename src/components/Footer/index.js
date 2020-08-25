import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

function Footer () {
    return (
        <Navbar className="footer text-center" fixed="bottom" bg="dark" variant="dark">
            <span>Juan M. Osorio</span>
        </Navbar>
    );
}

export default Footer;