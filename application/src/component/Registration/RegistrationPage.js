import React from 'react'
import { Button, Nav, NavDropdown, Form,   } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style.css';
export default function RegistrationPage() {
    return (
        <div className="container">
            <div className="form-custom my-5">
            <Form >
            <h6>Registration Page</h6>
                
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                 
                <button className="form-button btn btn-success" type="submit">
                    Login
                </button>
                
            </Form>

            <p className="my-3 ">Already have an account? <Link className="my-3 text-decoration-none" to="/login">Login here</Link> </p>
            </div>
             
            
        </div>
    )
}
