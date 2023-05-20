import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container" >
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
			          <h1 className="section-title">Clients Feedback</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info" >
					  <img src={publicUrl+"assets/img/home/testimonial-3.jpg"} alt="Image" />
			            <p><i className="flaticon-left-quote-1" /> 
						As a client of Abidi Enterprises, 
						I can unequivocally state that their 
						dedication and expertise surpassed all expectations. 
						From planning to architecture, construction, 
						and quality assurance, every step was handled 
						with utmost professionalism. Highly recommended!"</p>
			            <div className="ltn__testimoni-info-inner">
			              {/* <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="#" />
			              </div> */}
			              <div className="ltn__testimoni-name-designation">
			                <h5>Ali Mir</h5>
			                <label>Client</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/home/testimonial-2.jpg"} alt="Image" />
			            <p><i className="flaticon-left-quote-1" /> 
						Partnering with Abidi Enterprises for 
						our construction project was a highly 
						rewarding experience. The team's professionalism, 
						attention to detail, and commitment to timelines 
						were truly commendable. I highly 
						recommend Abidi Enterprises for their construction services.
						  </p>
			            <div className="ltn__testimoni-info-inner">
			              {/* <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
			              </div> */}
			              <div className="ltn__testimoni-name-designation">
			                <h5>Usman Afzal Janjua</h5>
			                <label>Client</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/home/testimonial-1.jpg"} alt="Image" />
			            <p><i className="flaticon-left-quote-1" /> 
						Working with Abidi Enterprises was a 
						transformative experience. Their professionalism,
						 attention to detail, and commitment to 
						 quality were truly exceptional. The team 
						 was available around the clock. 
						 I would wholeheartedly recommend Abidi 
						 Enterprises to anyone seeking top-tier 
						 construction services.
						</p>
			            <div className="ltn__testimoni-info-inner">
			              {/* <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="#" />
			              </div> */}
			              <div className="ltn__testimoni-name-designation">
			                <h5>Ahmad Hussain</h5>
			                <label>Client</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>James Carter</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> */}
			      {/*  */}
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial