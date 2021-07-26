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


        {/* <NavDropdown title="Md. Zahidur Rahman" className="nav-drop-title" >
          
          <NavDropdown.Item  >
          <Link className="custom-nav-drop" to="editprofile">
          Profile
          </Link>
          </NavDropdown.Item>
        
        
          <NavDropdown.Item  >
          <Link className="custom-nav-drop" to="orderdetail">
          Order History
          </Link>
          </NavDropdown.Item>


          <NavDropdown.Item  >
          <Link className="custom-nav-drop"  >
          Sign Out
          </Link>
          </NavDropdown.Item>
         
      </NavDropdown> */}


      <Nav>

      <div class="dropdown">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Md. Zahidur Rahman
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
         <Link to="editprofile" className="custom-nav-drop">
         <a class="dropdown-item"  >Action</a>
         </Link> 
          <a class="dropdown-item"  >Another action</a>
          <a class="dropdown-item"  >Something else here</a>
        </div>
      </div>
      </Nav>
      




      </Navbar.Collapse>
      </div>
    </Navbar>
        
        </>
    )
}
