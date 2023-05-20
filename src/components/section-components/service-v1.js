import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
						<h1 className="section-title">Our Core Services</h1>
					</div>
					</div>
				</div>
				<div className="row  justify-content-center">
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1" style={{ height: '480px' }}>
					<div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/service/service-1.jpg"} alt="#" />
			          </div>
						<div className="ltn__feature-info">
						<h3>ARCHITECTURE</h3>
						<p>Our architects at Abidi Enterprises masterfully design structures that stand the test of time. We incorporate modern trends and sustainable practices to create designs that are both innovative and environmentally friendly.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1" style={{ height: '480px' }}>
					<div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/service/service-2.jpg"} alt="#" />
			          </div>
						<div className="ltn__feature-info">
						<h3>CONSTRUCTION</h3>
						<p>We bring dreams to life through our construction services, delivering projects that reflect our dedication to quality, efficiency, and structural integrity.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1" style={{ height: '480px' }}>
					<div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/service/service-3.jpg"} alt="#" />
			          </div>
						<div className="ltn__feature-info">
						<h3>PROJECT MANAGEMENT</h3>
						<p>With Abidi Enterprises, every project is meticulously managed, ensuring deadlines are met, and quality is maintained. Our project management services strive for maximum efficiency and cost-effectiveness.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1" style={{ height: '480px' }}>
					<div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/service/service-4.jpg"} alt="#" />
			          </div>
						<div className="ltn__feature-info">
						<h3>INTERIOR DESIGNING</h3>
						<p>Our interior designers at Abidi Enterprises create spaces that reflect the unique taste and lifestyle of our clients. We blend aesthetics, comfort, and functionality to design interiors that inspire.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1" style={{ height: '480px' }}>
					<div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/service/service-5.jpg"} alt="#" />
			          </div>
						<div className="ltn__feature-info">
						<h3>BUILDING MAINTENANCE</h3>
						<p>At Abidi Enterprises, our building maintenance services are designed to keep your structures in prime condition. We cover all aspects of maintenance, from routine inspections to necessary repairs.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1" style={{ height: '480px' }}>
					<div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/service/service-7.jpg"} alt="#" />
			          </div>
						<div className="ltn__feature-info">
						<h3>RENOVATION</h3>
						<p>Our renovation services breathe new life into buildings, upgrading them to meet contemporary standards while preserving their unique features. We blend the old with the new to create spaces that inspire.</p>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ServiceV5