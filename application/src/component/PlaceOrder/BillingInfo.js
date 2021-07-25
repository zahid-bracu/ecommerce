import React from 'react'

export default function BillingInfo() {
    return (
        <div className="billing-info">
            <h5>Order Summary</h5>
            <p>Total Item : 2</p>
            <p>Prices : 15$</p>

            <p>Vat & Tax : 15%</p>
            <p>Total Price : 20$</p>
            <button className="btn btn-warning btn-custom">Place Order</button>
        </div>
    )
}
