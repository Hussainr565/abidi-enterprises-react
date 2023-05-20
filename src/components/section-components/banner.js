import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return    <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
				  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
				    {/* ltn__slide-item */}
				    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  <div className="slide-video mb-50 d-none">
				                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
				                      <i className="fa fa-play" />
				                    </a>
				                  </div>
				                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
				                  <h1 className="slide-title animated ">Dedicated to Quality and<br /> Results.</h1>
				                  <div className="slide-brief animated">
				                    <p>Upholding superior quality, Abidi Enterprises consistently achieves outstanding construction outcomes.</p>
				                  </div>
				                  <div className="btn-wrapper animated ">
				                    	<Link to="/contact" className="theme-btn-1 btn btn-effect-1 go-top">Get a Quote</Link>
				                    
				                  </div>
				                </div>
				              </div>
				              <div className="slide-item-img">
				                <img src={publicUrl+"assets/img/slider/home1-slideshow1.jpg"} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				    {/* ltn__slide-item */}
				    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner  text-right text-end">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
				                  <h1 className="slide-title animated ">Building <br /> Dreams  into <br /> Reality!</h1>
				                  <div className="slide-brief animated">
				                    <p>At Abidi Enterprises, we merge creativity with structural integrity, turning ideas into remarkable architectural masterpieces.</p>
				                  </div>
				                  <div className="btn-wrapper animated">
				                    <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
				                  </div>
				                </div>
				              </div>
				              <div className="slide-item-img slide-img-left">
				                <img src={publicUrl+"assets/img/slider/home1-slideshow2.jpg"} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				    {/*  */}
				  </div>
			</div>
        }
}

export default Banner