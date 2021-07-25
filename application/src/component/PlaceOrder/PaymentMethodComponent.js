import React from 'react'
import './style.css'
export default function PaymentMethodComponent() {
    return (
        <div className="method my-3">
            <h5>Payment</h5>
            <p>
            <span  className="font-bold">Method:  </span> Stripe
            </p>
            <div className="alert alert-danger">Not Paid</div>
        </div>
    )
}
