import React from 'react'
import './style.css'
export default function CartInfo() {
    return (
        <div className="cart-info-table mt-3   mx-auto">
            <h5>Cart</h5>
            <p>Total Item : 2</p>
            <p>Prices : 15$</p>
            <p>Vat & Tax : 15%</p>
            <p>Total Price : 20$</p>
            <button className="btn btn-danger btn-sm" style={{width:"100%"}}>Proceed</button>
        </div>
    )
}
