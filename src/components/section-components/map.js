import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.68059446065845!2d74.37566396732443!3d31.472225408455937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919074157d340f5%3A0xd44a6c8720d5ab22!2sBrands%20By%20MK%20Jiya%20Khan!5e0!3m2!1sen!2sca!4v1684128515896!5m2!1sen!2sca" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map