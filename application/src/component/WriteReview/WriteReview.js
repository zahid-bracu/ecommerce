import React from 'react'
import { Button, Nav, NavDropdown, Form, FormControl, Navbar } from 'react-bootstrap';
import './style.css';
export default function WriteReview() {
    return (
        <>
        <div className="container my-5">
        


        <Form className="custom-form">
        <h6>Write Customer Review</h6>
                <div class="form-group">
                    <label for="rating">Rating</label>
                    <select class="form-control" id="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <Form.Group className="mb-3" controlId="review">
                    <Form.Label>Write Review</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button type="submit" className="btn btn-success btn-custom">Submit</button>
            </Form> 
        </div>  
        </>
    )
}
