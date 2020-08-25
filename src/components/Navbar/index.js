import React from "react";
import Row from "../Row";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Juan M. Osorio
            </Link>
            
            <Row>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={
                            window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                        }
                        >About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={window.location.pathname === "/porfolio" ? "nav-link active" : "nav-link"}
                        >Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                        >Resume
                        </Link>
                    </li>
                </ul>
            </Row>
        </nav>
    );
}

export default Navbar;