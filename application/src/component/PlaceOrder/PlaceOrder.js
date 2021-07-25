import React from 'react'
import './style.css'
import ShippingComponent from './ShippingComponent';
import PaymentMethodComponent from './PaymentMethodComponent';
import BillingInfo from './BillingInfo';
export default function PlaceOrder() {
    return (
        <div className="container py-3">
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
