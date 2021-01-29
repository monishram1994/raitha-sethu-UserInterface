import React from 'react';
// import '../styles/all.css'
// import '../styles/style.css'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import logo from '../images/logo.png';
import 'jquery';
import "../../node_modules/bootstrap/dist/js/bootstrap";

export default class Header extends React.Component{
    
    render(){

        return(
            <div style={{position: "relative",paddingBottom: "10px"}}>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                        {/*<img src={logo} alt="logo" />*/}
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/Login">Login</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>                
            </div>
        )       
    }
}