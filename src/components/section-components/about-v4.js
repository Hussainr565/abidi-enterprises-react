import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
					<div className="about-us-img-wrap about-img-left">
						<img src={publicUrl+"assets/img/others/about-us.jpg"} alt="About Us Image" />
						<div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
						
						</div>
					</div>
					</div>
					<div className="col-lg-6 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
						<h1 className="section-title" style={{ textAlign: "left" }}>OUR COMPANY</h1>
						<p>Since its establishment in 1990 by Syed Ahsan Raza Shah, Abidi Enterprises has carved a niche for itself in the construction sector. Our multifaceted experience spans across project management, renovations, architecture, road construction, sewerage systems, buildings, and plazas. We have showcased our skills in numerous projects for both government and private sectors, consistently delivering excellence.
							<br /> <br />Notable projects under our belt include the construction of Garrison Academy School Lahore, Bhogiwal Road, and Brick Masonry Drain, all speaking volumes of our commitment to quality. We have also been instrumental in developing the Lahore Cantonment Board, the Defence Shopping Mall for Rafi Group, and managing the sewerage work for TIP Colony. Our expertise is also evident in our work at the Green Fields Farm Housing Scheme, the Army Public School Sahiwal, and Lahore Grammar School at the State Life Housing Cooperative Society Phase I. At Abidi Enterprises, we build not just structures, but lasting impressions.</p>
						</div>
						{/* <ul className="ltn__list-item-half clearfix">
						<li>
							<i className="flaticon-home-2" />
							Smart Home Design
						</li>
						<li>
							<i className="flaticon-mountain" />
							Beautiful Scene Around
						</li>
						<li>
							<i className="flaticon-heart" />
							Exceptional Lifestyle
						</li>
						<li>
							<i className="flaticon-secure" />
							Complete 24/7 Security
						</li>
						</ul> */}
						{/* <div className="ltn__callout bg-overlay-theme-05  mt-30">
						<p>"Enimad minim veniam quis nostrud exercitation <br />
							llamco laboris. Lorem ipsum dolor sit amet" </p>
						</div> */}
						{/* <div className="btn-wrapper animated">
						<Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
						</div> */}
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default AboutV4