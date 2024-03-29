import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import Workspecification from './section-components/workspecification';
import Map from './section-components/map';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const ContactV1 = () => {
    return <div>
        <Navbar />
        <PageHeader Img="contact-heading.jpg" headertitle="Contact Us" subheader="Contact" />
        <Workspecification />
        <ContactInfo />
        <ContactForm />
        <Map />
        <Footer />
    </div>
}

export default ContactV1

