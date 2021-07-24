import React from 'react'
import { Button,  Form } from 'react-bootstrap';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function PaymentPage() {
    return (
        <div className="container">
            
            <Form className="form-custom">
            <h4>Payment</h4>

            <div className="form-check my-4">
            <input className="form-check-input" type="radio" name="payment" id="paypal"/>
            <h6 className="form-check-label" for="paypal">
                Paypal
            </h6>
            </div>

            <div className="form-check my-4">
            <input className="form-check-input" type="radio" name="payment" id="stripe" />
            <h6 className="form-check-label" for="stripe">
                Stripe
            </h6>
            </div>
            <Link to="/placeorder">
            <button className="btn btn-success custom-btn">Continue</button>
            </Link>
            </Form>
        </div>
    )
}
