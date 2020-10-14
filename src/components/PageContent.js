import React from 'react';
// import '../styles/all.css';
// import '../styles/style.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Load Images
import ServiceImage1 from '../images/services-img-01.jpg';
import ServiceImage2 from '../images/services-img-02.jpg';
import ServiceImage3 from '../images/services-img-03.jpg';

import AboutImage from '../images/about-img.jpg';
import PortfolioImage1 from '../images/portfolio-img-01.jpg'
import PortfolioImage2 from '../images/portfolio-img-02.jpg'
import PortfolioImage3 from '../images/portfolio-img-03.jpg'
import PortfolioImage4 from '../images/portfolio-img-04.jpg'
import PortfolioImage5 from '../images/portfolio-img-05.jpg'

export default class PageContent extends React.Component{
    
    render(){
        return(
            
            <div className="container">
                <div className="services-bar">
                    <h1 className="my-4">Our Best Services </h1>
                    
                    <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">High Quality Manure</h4>
                            <div className="card-img">
                                <img className="img-fluid" src={ServiceImage1} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">High Quality Manure</h4>
                            <div className="card-img">
                                <img className="img-fluid" src={ServiceImage2} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">High Quality Manure</h4>
                            <div className="card-img">
                                <img className="img-fluid" src={ServiceImage3} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
        
                <div className="about-main">
                    <div className="row">
                    <div className="col-lg-6">
                        <h2>Welcome to e-Agriculture App</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h5>Our smart approach</h5>
                        <ul>
                            <li>Sed at tellus eu quam posuere mattis.</li>
                            <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Duis porttitor odio pellentesque mollis vulputate.</li>
                            <li>Quisque ac eros non ex hendrerit vehicula.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid rounded" src={AboutImage} alt="" />
                    </div>
                    </div>
                    
                </div>
        
                <div className="portfolio-main">
                    <h2>Our Portfolio</h2>
                    <div className="row">
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                            <div className="card-img">
                                <a href="#">
                                <img className="card-img-top" src={PortfolioImage1} alt="" />
                                <div className="overlay"><i className="fas fa-arrows-alt"></i></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Lawn & garden care</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                            <div className="card-img">
                                <a href="#">
                                <img className="card-img-top" src={PortfolioImage2} alt="" />
                                <div className="overlay"><i className="fas fa-arrows-alt"></i></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Lawn renovation</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                            <div className="card-img">
                                <a href="#">
                                <img className="card-img-top" src={PortfolioImage3} alt="" />
                                <div className="overlay"><i className="fas fa-arrows-alt"></i></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Tree planting</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                            <div className="card-img">
                                <a href="#">
                                <img className="card-img-top" src={PortfolioImage4} alt="" />
                                <div className="overlay"><i className="fas fa-arrows-alt"></i></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Water Baganig</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                            <div className="card-img">
                                <a href="#">
                                <img className="card-img-top" src={PortfolioImage5} alt="" />
                                <div className="overlay"><i className="fas fa-arrows-alt"></i></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Growing plants</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                            <div className="card-img">
                                <a href="#">
                                <img className="card-img-top" src={PortfolioImage1} alt="" />
                                <div className="overlay"><i className="fas fa-arrows-alt"></i></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">Snow removal</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                
                <hr></hr>
        
                <div className="row mb-4">
                    <div className="col-md-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                    </div>
                    <div className="col-md-4">
                    <a className="btn btn-lg btn-secondary btn-block" href="#">Get In Touch Now</a>
                    </div>
                </div>
            </div>
        )
    }
}