import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../img/travel_logo.webp';
import './Header.css';

const Header = () => {
   return (
      <>
         <div className="navBar_container">
            <Navbar collapseOnSelect expand="lg" variant="dark">
               <Container>
                  <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="ms-auto nav_menu">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/myOrder">My Orders</NavLink>
                        <NavLink to="/manageAllOrders">Manage All Orders</NavLink>
                        <NavLink to="/addService">Add Service</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <div className="login-btn">
                           <Link to="/login">
                              <button className="regular_btn">Login</button>
                           </Link>
                        </div>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </>
   );
};

export default Header;