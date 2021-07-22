import React from 'react';
import './style.css';
import makeid from './Name';
import WriteReview from '../WriteReview/WriteReview';
export default function ViewDetails() {
    const name=makeid(5);
    return (
        <>
        <div className="container">
        <div className=" row justify-content-around align-items-center">
              <img className="item-image col-lg-4 col-lg-6 col-sm-12 col-12" alt="item_image" src="https://i.ibb.co/Wcc5YLV/1025-trek-first-aid-kit-1-2.jpg" />
              <div className="item-info col-lg-4 col-lg-6 col-sm-12 col-12">
                  <h6>Fjallraven - Foldsack No. 1 Backpack</h6>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p><span className="  font-weight-bold">Price : </span> 120$</p>
                  <p><span className="  font-weight-bold">Description : </span>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                  
              </div>

              <div className="item-info-button col-lg-4 col-lg-6 col-sm-12 col-12">
              <p>Seller</p>
              <h5 className="text-primary font-weight-bold">{name} </h5>
              <p><span className="  font-weight-bold">Price : </span> 120$</p>
              <p><span className="  font-weight-bold">Status : </span> <span className="text-success">Available</span></p>
              <button className="btn btn-success btn-sm px-4">Add</button>
              </div>
        </div>  

        <WriteReview/>
        </div>
        </>
    )
}
