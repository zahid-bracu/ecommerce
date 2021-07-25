import React, {useState} from 'react';
import { Button,  Form } from 'react-bootstrap';
import {
    Link,useHistory
  } from "react-router-dom";
import './style.css';

const PasswordChangePage = () => {
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
  
  
            <Form className="custom-form" onSubmit={submitFunc}>
                <h5 className="text-center my-3">Change Password</h5>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control onBlur={funcChange} name="password" type="text" placeholder="Enter New Password" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="confirmpassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control onBlur={funcChange} name="confirmpassword" type="text" placeholder="Confirm New Password" />
                </Form.Group>

                


                 
                <Button className="custom-btn"  variant="danger" type="submit">
                    Change Password
                </Button>
            </Form>
       
 );
};

export default PasswordChangePage;