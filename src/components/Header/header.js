import React from "react";
import {Link} from "react-router-dom";
import logo from "../../download.png"
import "./header.css"

const Header = (props) => {
    return(
        <header className="" style={{fontSize : "22px"}}>
            <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
                <div className="container">
                    <a className="navbar-brand d-block " href="/">
                        <img src={require("../../download.png")} height="80" className="rounded-pill"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="#navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item">
                                <a className="nav-link mx-2 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to={"/movies"} className="nav-link mx-2" >Movies</Link>
                            </li>
                           {/* <li className="nav-item d-none d-lg-block">
                                <a className="nav-link mx-2" href="/">
                                    <img src={require("../../download.png")} height="80" className="rounded-pill"/>
                                </a>
                            </li>*/}
                            <li className="nav-item">
                                <Link to={"/people"} className="nav-link mx-2" >People</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;