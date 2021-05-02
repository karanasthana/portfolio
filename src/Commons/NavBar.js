import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './NavBar.scss';
import * as CONSTANTS from '../constants/constants';

class NavBar extends React.Component {
   render() {
      return (
         <Navbar bg="light" expand="lg" className="navbar-style">
            <Navbar.Brand href="#home">Karan Asthana</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="reverse-row-nav" >
               <Nav>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#industry">Industry Experience</Nav.Link>
                  <Nav.Link href="#contact">Contact Me</Nav.Link>
                  <Nav.Link href={CONSTANTS.RESUME_PDF_LINK} target="_blank" rel="noreferrer" download>
                     <button>Download Resume</button>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      )
   }
}
export default NavBar