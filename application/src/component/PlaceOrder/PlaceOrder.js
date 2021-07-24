import React from 'react'
import './style.css'
import ShippingComponent from './ShippingComponent';
import PaymentMethodComponent from './PaymentMethodComponent';
import BillingInfo from './BillingInfo';
export default function PlaceOrder() {
    return (
        <div className="container py-3">
            <div className=" ">
                <ShippingComponent/>
                <PaymentMethodComponent/>
                <BillingInfo/>
            </div>
        </div>
    )
}
