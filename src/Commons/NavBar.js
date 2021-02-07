import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBar extends React.Component {
render() {
      return (
          <div>
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Karan Asthana</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
         </Navbar>
        </div>
      )
   }
}
export default NavBar