import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-address-area mb-90">
				<div className="container">
				<div className="row">
					<div className="col-lg-4">
					<div style={{ height: '320px' }} className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/10.png"} alt="Icon Image" />
						</div>
						<h3>Email Address</h3>
						<p>
						contact@abidienterprises.com</p>
					</div>
					</div>
					<div className="col-lg-4">
					<div style={{ height: '320px' }} className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/11.png"} alt="Icon Image" />
						</div>
						<h3>Phone Number</h3>
						<p>0300 4807720</p>
					</div>
					</div>
					<div className="col-lg-4">
					<div style={{ height: '320px' }} className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/12.png"} alt="Icon Image" />
						</div>
						<h3>Office Address</h3>
						
						<p> Plaza No.22, Block­ Y, Phase-3, DHA, Lahore, Pakistan
						</p>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ContactInfo