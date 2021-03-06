import React from 'react'
import bannerOne from '../../resource/banner/bannerOne.jpg'
import './style.css';
 
 
import Fade from 'react-reveal/Fade';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function BannerOne() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <Fade left>
                <h1 className="text-primary">Ebay Online Shop</h1>
  
                <h5 className="text-dark">Find Your Daily Product Here</h5>
                
                <p className="text-justify"> ইবে ইনক. হল একটি আমেরিকান মাল্টিন্যাশনাল কর্পোরেশন এবং ই-কমার্স কোম্পানি, ইন্টারনেটের মাধ্যমে ভোক্তা থেকে ভোক্তা এবং ব্যবসায়ী থেকে ভোক্তাকে বিক্রয় সেবা প্রদান করা হয়ে থাকে। এর প্রধান কার্যালয় স্যান হোসে, ক্যালিফোর্নিয়াতে অবস্থিত।</p>
                <Link to="shop">
                <button className="btn btn-primary btn-sm px-4">  Shop </button></Link>
                </Fade>

            </div>

            <Fade right>
            <img className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 banner-one-image" alt="Banner" src={bannerOne} />
            </Fade>
        </div>
        </div>
    )
}
