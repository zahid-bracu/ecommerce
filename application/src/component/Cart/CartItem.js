import React from 'react';
import SelectOption from './SelectOption';
import './style.css';
export default function CartItem() {
    return (
        
      
            <div className=" cart-item row justify-content-center align-items-center">
                <div className=" col-lg-6 col-md-6 col-sm-12 col-12   ">
                    <img className="cart-image mx-auto d-block" src="https://i.ibb.co/5rnZHCX/laptop.png" alt="item_image"/>
                </div>
                <div className="cart-info col-lg-6 col-md-6 col-sm-12 col-12">
                 
                    <h6>Dell Laptop</h6>
                    <p>$100</p>
                    
                    <SelectOption/>
                    <p></p>
                    <button className="btn   btn-outline-danger btn-sm">Delete</button>
                </div>
            </div>
            
         
    )
}
