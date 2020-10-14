import React from 'react';
import FooterLogo from '../images/footer-logo.png'

//Images
import Image1 from '../images/post-img-01.jpg'
import Image2 from '../images/post-img-02.jpg'
import Image3 from '../images/post-img-03.jpg'


export default class Footer extends React.Component{
   
    render(){
        return(
            <footer className="footer">
                <div className="container bottom_border">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                                
                                <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p><i className="fa fa-location-arrow"></i> Shimogga </p>
                                <p><i className="fa fa-phone"></i> +91-9999878398 </p>
                                <p><i className="fa fa fa-envelope"></i> info@example.com </p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col">
                                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                                
                                <ul className="footer_ul2_amrc">
                                    <li>
                                        <a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a>
                                        <p>Lorem Ipsum is simply dummy printing...<a href="#">https://www.google.com/</a></p>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a>
                                        <p>Lorem Ipsum is simply dummy printing...<a href="#">https://www.google.com/</a></p>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a>
                                        <p>Lorem Ipsum is simply dummy printing...<a href="#">https://www.google.com/</a></p>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                                
                                <ul className="footer_ul_amrc">
                                    <li><a href="#">Default Version</a></li>
                                    <li><a href="#">Boxed Version</a></li>
                                    <li><a href="#">Our Team </a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Get In Touch</a></li>
                                </ul>                                
                            </div>  

                            <div class="col-lg-3 col-md-6 col-sm-6 ">
                                <h5 class="headin5_amrc col_white_amrc pt2">Recent posts</h5>
                                
                                <ul class="footer_ul_amrc">
                                    <li class="media">
                                        <div class="media-left">
                                            <img class="img-fluid" src={Image1} alt="" />
                                        </div>
                                        <div class="media-body">
                                            <p>News 1</p>
                                            <span>1 Sep 2020</span>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="media-left">
                                            <img class="img-fluid" src={Image2} alt="" />
                                        </div>
                                        <div class="media-body">
                                            <p>News 1</p>
                                            <span>1 Sep 2020</span>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="media-left">
                                            <img class="img-fluid" src={Image3} alt="" />
                                        </div>
                                        <div class="media-body">
                                            <p>News 1</p>
                                            <span>1 Sep 2020</span>
                                        </div>
                                    </li>
                                </ul>
					
				            </div>                      
                        </div>
                </div>
                <div className="container">
                    <div className="footer-logo">
                        <a href="#"><img src={FooterLogo} alt="" /></a>
                    </div>
                    
                    <p className="copyright text-center">All Rights Reserved. &copy; 2020 <a href="#">E-Agriculture</a>  Design By : 
                        <a href="https://ka14.me">KA14 Software solutions</a>
                    </p>
                    <ul className="social_footer_ul">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                    
                </div>
    </footer>
        )
    }
}