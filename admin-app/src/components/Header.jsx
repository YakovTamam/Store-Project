import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiCutDiamond } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          Asser <GiCutDiamond /> Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <NavLink to='/signin' className='nav-link'>
              Signin
            </NavLink>
            <NavLink to='/register' className='nav-link'>
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
