import React from 'react';
// import '../styles/all.css'
// import '../styles/style.css'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/logo.png';
import 'jquery';
import "../../node_modules/bootstrap/dist/js/bootstrap";

export default class Header extends React.Component{
    
    render(){

        return(
            <div style={{position: "relative"}}>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" />
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Portfolio
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                                    <a className="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
                                    <a className="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
                                    <a className="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
                                    <a className="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
                                    <a className="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                                    <a className="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
                                    <a className="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
                                    <a className="dropdown-item" href="blog-post.html">Blog Post</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                                    <a className="dropdown-item" href="faq.html">FAQ</a>
                                    <a className="dropdown-item" href="404.html">404</a>
                                    <a className="dropdown-item" href="pricing.html">Pricing Table</a>
                                </div>
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