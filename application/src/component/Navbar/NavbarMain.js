import React from 'react';
import './style.css';
import ebay from '../../resource/navbar/rokomari_logo.png';
import { Button, Nav, NavDropdown, Form, FormControl, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css'


export default function NavbarMain() {
        
    return (
      <>
       <Navbar bg="dark" className="sticky-top" expand="lg">
      <div className="container">
      <Navbar.Brand href="#">
        <img src={ebay} alt="ebay" className="nav-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-lg-0"
           
      
        >
          <Nav.Link  >
            <Link className="custom-nav"  to="/">Home</Link>
            
            </Nav.Link>

            <Nav.Link  >
            <Link className="custom-nav"  to="/shop">Shop</Link>
            
            </Nav.Link>
          
           
        </Nav>


        <Nav
          className="mx-auto  my-lg-0"
           
       
        >
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="danger">Search</Button>
        </Form>
        </Nav>


        <Nav
          className="mx-auto  my-lg-0"
        >

           <Nav.Link  >
            <Link className="custom-nav"  to="/cart">Cart</Link>
            </Nav.Link>

         <Link to="/login">
         <Button className="mr-2 my-1" variant="secondary">Login</Button> 
           </Link> 


           <Link to="/registration"><Button className="mr-2 my-1" variant="success">Sign up</Button> </Link>
          

        </Nav>




      </Navbar.Collapse>
      </div>
    </Navbar>
        
        </>
    )
}
