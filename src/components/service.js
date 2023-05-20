import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV5 from './section-components/neighbour';
import ServiceV1 from './section-components/service-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Service_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader Img="service-banner-background.jpg" headertitle="What We Do" subheader="Service" />
        <ServiceV1 />
        {/* <AboutV5 /> */}
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Service_V1

