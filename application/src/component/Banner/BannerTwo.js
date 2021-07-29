import React from 'react'
import './style.css';
import image12 from '../../resource/icons/image12.png';
import image13 from '../../resource/icons/image13.png';
import image14 from '../../resource/icons/image14.png';
import shopping from '../../resource/images/shopping.png';
import Fade from 'react-reveal/Fade';
export default function BannerTwo() {
    return (
        <Fade bottom>
        <div className="container my-5">
            <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <img src={shopping} className="shopping-image"/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                 <div className="d-flex  justify-content-center align-items-center my-3 shop-card">
                        <img src={image12} className="icon-image d-block" alt="Image 12"/>
                        <div className="d-block ml-2">
                            <h6>Find The Perfect Fit</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center align-items-center my-3 shop-card">
                        <img src={image13} className="icon-image d-block" alt="Image 12"/>
                        <div  className="d-block ml-2">
                            <h6>Free Exchanges</h6>
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center align-items-center my-3 shop-card">
                        <img src={image14} className="icon-image d-block" alt="Image 12"/>
                        <div  className="d-block ml-2">
                            <h6>Contact Our Seller</h6>
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
        </Fade>
    )
}
