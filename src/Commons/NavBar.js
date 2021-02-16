import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

class NavBar extends React.Component {
   render() {
      return (
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Karan Asthana</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="reverse-row-nav" >
               <Nav>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#industry">Industry Experience</Nav.Link>
                  <Nav.Link href="#contact">Contact Me</Nav.Link>
                  <Nav.Link href="https://karanpersonal.s3.ap-south-1.amazonaws.com/Karan+Asthana+Resume+-+Frontend+Developer+-+React+Native+.pdf" target="_blank" rel="noreferrer" download>
                     <button>Download Resume</button>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      )
   }
}
export default NavBar