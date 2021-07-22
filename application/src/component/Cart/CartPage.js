import React from 'react'
import CartInfo from './CartInfo'
import CartItem from './CartItem'

export default function CartPage() {
    return (
        <div className="container">
            <div className="row justify-content-between  ">
                <div className='col-lg-10 col-md-8 col-sm-12 col-12'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 col-12 order-lg-last order-md-last order-sm-first order-first">
                    <CartInfo  />
                </div>
            </div>

        </div>
    )
}
