import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__faq-area mb-100">
            <div className="container">
            <div className="row">
                <div >
                <div className="ltn__faq-inner ltn__faq-inner-2">
                    <div id="accordion_2">
                    {/* card */}
                    <div className="card">
                        <h6 className=" ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="true">
                        Why should I choose Abidi Enterprises for my construction project?
                        </h6>
                        <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Abidi Enterprises brings over three decades of industry experience, with a proven track record of delivering high-quality construction and architectural services. Our past projects span various sectors, including government departments and the private sector, and cover a wide range of services from project management, renovations, architecture, to construction of roads, sewerage systems, buildings, and plazas. Our commitment to quality and customer satisfaction sets us apart in the industry.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false"> 
                        What makes Abidi Enterprises different from other construction firms?
                        </h6>
                        <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Our founder, Syed Ahsan Raza Shah, instilled a commitment to excellence and customer satisfaction that remains at the core of our operations today. We've successfully completed projects of varying scales and complexity, including prestigious establishments like the Garrison Academy School Lahore, Defence Shopping Mall, and Lahore Grammar School. Our ability to consistently deliver on time and within budget, while maintaining the highest quality standards, distinguishes us from other firms.</p>
                            </div>
                        </div>
                    </div>                          
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                        Can Abidi Enterprises handle complex, large-scale projects?
                        </h6>
                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Absolutely. Abidi Enterprises has demonstrated its capability to manage and execute complex, large-scale projects across both government and private sectors. We have a comprehensive understanding of the complexities involved in large projects, from the initial design phase to final completion. Our portfolio includes large-scale projects such as the construction of Bhogiwal Road, Brick Masonry Drain, and the Defence Shopping Mall, among others. Our seasoned team of professionals ensures every project is handled with the utmost expertise and attention to detail.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                        How does Abidi Enterprises ensure the quality of its projects?
                        </h6>
                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>At Abidi Enterprises, quality is embedded in every stage of our construction process. We rigorously follow industry-standard protocols and continuously monitor our work to ensure it meets the highest standards. Our team is comprised of highly skilled professionals who are committed to delivering excellence in every project we undertake.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                        How does Abidi Enterprises manage time and cost efficiency in their projects?
                        </h6>
                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Efficient project management is a cornerstone of our operations at Abidi Enterprises. We use advanced project management tools and methodologies to ensure projects are delivered on time and within budget. We maintain clear communication with our clients throughout the project, providing regular updates on progress and promptly addressing any issues that may arise.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                        How does Abidi Enterprises prioritize safety in their construction projects?
                        </h6>
                        <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Safety is paramount in all our projects at Abidi Enterprises. We adhere strictly to all safety regulations and guidelines, and we regularly train our staff to ensure they're up to date with the latest safety practices. We believe that a safe work environment is crucial for the success of any project.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    
                    </div>
                    <div className="need-support text-center mt-100">
                    <h2>Still need help? Reach out to support 24/7:</h2>
                    <div className="btn-wrapper mb-30 go-top">
                        <Link to="/contact" className="theme-btn-1 btn">Contact Us</Link>
                    </div>
                    <h3><i className="fas fa-phone" />  0300 4807720</h3>
                    </div>
                </div>
                </div>
                {/* <div className="col-lg-4">
                <aside className="sidebar-area ltn__right-sidebar">
                   
                    <div className="widget ltn__search-widget ltn__newsletter-widget">                            
                    <h6 className="ltn__widget-sub-title">// subscribe</h6>
                    <h4 className="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                        <input type="text" name="search" placeholder="Search" />
                        <button type="submit"><i className="fas fa-search" /></button>
                    </form>
                    <div className="ltn__newsletter-bg-icon">
                        <i className="fas fa-envelope-open-text" />
                    </div>
                    </div>
                    
                    <div className="widget ltn__banner-widget go-top">
                    <Link to="shop.html"><img src={publicUrl+"assets/img/banner/banner-3.jpg"} alt="Banner Image" /></Link>
                    </div>
                </aside>
                </div> */}
            </div>
            </div>
        </div>
  
        }
}

export default FaqV1