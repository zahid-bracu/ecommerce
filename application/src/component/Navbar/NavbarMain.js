import React from 'react';
import './style.css';
import ebay from '../../resource/navbar/rokomari_logo.png';
import { Button, Nav, NavDropdown, Form, FormControl, Navbar } from 'react-bootstrap';
import './style.css'


export default function NavbarMain() {
        
    return (
      <>
       <Navbar bg="dark" className="fixed-top" expand="lg">
      <div className="container">
      <Navbar.Brand href="#">
        <img src={ebay} alt="ebay" className="nav-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-lg-0"
           
      
        >
          <Nav.Link className="custom-nav" href="#action1">Home</Nav.Link>
          <Nav.Link className="custom-nav" href="#action2">Shop</Nav.Link>
          <Nav.Link className="custom-nav" href="#action3">Contact</Nav.Link>
          <Nav.Link className="custom-nav" href="#action4">Github</Nav.Link>

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
          <Button className="mr-2 my-1" variant="secondary">Login</Button> 
          <Button className="mr-2 my-1" variant="success">Sign up</Button> 

        </Nav>




      </Navbar.Collapse>
      </div>
    </Navbar>
        
        </>
    )
}
