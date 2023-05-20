import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/AbidiNew.png"} alt="Logo" />
				              </div>
				            </div>
				            <p>Abidi Enterprises, established in 1990, offers expert construction services across various sectors. Founded by Syed Ahsan Raza Shah, we're renowned for our commitment to quality, customer satisfaction, and diverse project portfolio.</p>
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p> Plaza No.22, Block­ Y, Phase-3, DHA, Lahore, Pakistan</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+0123-456789"> 0300 4807720</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:example@example.com"> contact@abidienterprises.com</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Company</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/about">About</Link></li>
				                {/* <li><Link to="/blog-grid">Blog</Link></li>
				                <li><Link to="/shop">All Products</Link></li> */}
				                {/* <li><Link to="/contact">Contact</Link></li> */}
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact">Contact Us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Services</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                {/* <li><Link to="/cart">Cart</Link></li>
				                <li><Link to="/wishlist">Wish List</Link></li>
				                <li><Link to="/login">Login</Link></li>
				                <li><Link to="/checkout">Checkout</Link></li> */}
								<li><Link to="/service">All Services</Link></li>
								<li><Link to="/portfolio">Gallery</Link></li>
				                {/* <li><Link to="/about">Terms &amp; Conditions</Link></li> */}
				                {/* <li><Link to="/shop">Promotional Offers</Link></li> */}
				              </ul>
				            </div>
				          </div>
				        </div>
				        {/* <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Customer Care</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Login</Link></li>
				                <li><Link to="/my-account">My account</Link></li>
				                <li><Link to="/wishlist">Wish List</Link></li>
				                <li><Link to="/add-listing">Add listing</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact">Contact us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div> */}
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div >
                                <h3>Working hours</h3>
                            </div>
                            <div style={{color:"white"}}>
                                Our support team is ready to assist you as quickly as possible, any day, any time.
                            </div>
							<br />
                            <div className="footer-address">
                                <span className="time-block">
                                    <span>Mon-Fri:</span>
                                <span>9am to 5pm</span>
                                </span>
								<br />
                                <span className="time-block">
                                    <span>Sat-Sun:</span>
                                <span>11am to 6pm</span>
                                </span>
                            </div>
                        </div>
				        {/* <div className="col-xl-3 col-md-6 col-sm-12 col-12">
				          <div className="footer-widget footer-newsletter-widget">
				            <h4 className="footer-title">Newsletter</h4>
				            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
				            <div className="footer-newsletter">
				              <form action="#">
				                <input type="email" name="email" placeholder="Email*" />
				                <div className="btn-wrapper">
				                  <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
				                </div>
				              </form>
				            </div>
				          
				          </div>
				        </div> */}
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1