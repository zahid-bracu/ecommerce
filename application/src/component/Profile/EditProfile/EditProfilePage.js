import React, {useState} from 'react';
import { Button,  Form } from 'react-bootstrap';
import {
    Link,useHistory
  } from "react-router-dom";
import PasswordChangePage from '../ChangePassword/PasswordChangePage';
import './style.css';

const EditProfilePage = () => {
    let history = useHistory();
 const [info,setInfo]=useState({
  name:"",
  email:"",
  address:""
 })
 
 const funcChange=(e)=>{
  console.log(e.target.value)
  var temp={...info};
  temp[e.target.name]=e.target.value;
  setInfo(temp);
 }


 const submitFunc=(e)=>{
  e.preventDefault();
  history.push("/payment");
  console.log(info)
 }
 
 return (
  <div className="container">
   <div className="row">
       <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-last">
            <Form className="custom-form" onSubmit={submitFunc}>
                <h5 className="text-center my-3">Customer's Profile Information</h5>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={funcChange} name="name" type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={funcChange} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={funcChange} name="email" type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="profession">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control onBlur={funcChange} name="profession" type="text" placeholder="Enter Profession" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onBlur={funcChange} name="address" type="text" placeholder="Enter Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control onBlur={funcChange} name="city" type="text" placeholder="Enter City" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="postal">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control onBlur={funcChange} name="postal" type="text" placeholder="Enter Postal Code" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="Country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control onBlur={funcChange} name="country" type="text" placeholder="Enter Country" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="custom-btn"  variant="success" type="submit">
                    Submit
                </Button>
            </Form>
       </div>
       <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-first">
           <PasswordChangePage/>
       </div>
   </div>
  </div>
 );
};

export default EditProfilePage;