import React from 'react'
import { Button, Nav, NavDropdown, Form,   } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style.css';
export default function LoginPage() {
    return (
        <div className="container">
            <div className="form-custom my-5">
            <Form >
            <h6>Login Page</h6>
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
                 
                <button className="form-button btn btn-success" type="submit">
                    Login
                </button>
                
            </Form>

            <p className="my-3 ">New customer?<Link className="my-3 text-decoration-none" to="/">Create your account</Link> </p>
            </div>
             
            
        </div>
    )
}
