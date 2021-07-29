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


export default function NavbarMain({state,changeState}) {
        
    return (
      <>
       <Navbar bg="white" className="sticky-top" expand="lg">
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
          <button className="btn btn-danger btn-sm" variant="danger">Search</button>
        </Form>
        </Nav>


        <Nav
          className="mx-auto  my-lg-0"
        >

           <Nav.Link  >
            <Link className="custom-nav"  to="/cart">Cart</Link>
            </Nav.Link>

         {
          //  to="/login"
           !state && <><Link >
           <Button onClick={changeState} className="mr-2 my-1 btn-sm" variant="dark">Login</Button> 
             </Link> 
  
  
             <Link to="/registration"><Button className="mr-2 my-1 btn-sm" variant="primary">Sign up</Button> </Link></>
         }
          

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
        <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Md. Zahidur Rahman
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
         <Link to="editprofile" className="custom-nav-drop">
         <a class="dropdown-item"  >Profile Information</a>
         </Link> 

         <Link to="orderdetail" className="custom-nav-drop">
         <a class="dropdown-item"  >Order Details</a>
         </Link> 


         <Link to="/login"  className="custom-nav-drop">
         <a class="dropdown-item"  >Login</a>
         </Link> 

         <Link   className="custom-nav-drop">
         <a class="dropdown-item"  >Sign out</a>
         </Link> 
           
        </div>
      </div>
      </Nav>
      




      </Navbar.Collapse>
      </div>
    </Navbar>
        
        </>
    )
}
