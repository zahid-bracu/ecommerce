import React from 'react'
import './style.css'
import ShippingComponent from './ShippingComponent';
import PaymentMethodComponent from './PaymentMethodComponent';
import BillingInfo from './BillingInfo';
export default function PlaceOrder() {
    return (
        <div className="container py-3">
            <h6 className="mb-4 text-center">Order ID: <span className="text-primary">jksdgp43-6875468-034590</span></h6>
            <div className="row  ">
                <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                <ShippingComponent/>
                <PaymentMethodComponent/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <BillingInfo/>
                </div>
                
            </div>
        </div>
    )
}
