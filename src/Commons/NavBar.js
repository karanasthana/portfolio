import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './NavBar.scss';
import * as CONSTANTS from '../constants/constants';
import { Button } from '../StyledComponents/Button';
import { Link } from "react-scroll";

class NavBar extends React.Component {
   render() {
      return (
         <Navbar bg="light" expand="lg" className="navbar-style">
            <Navbar.Brand href="#home">
               <Link
                  activeClass="active-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Karan Asthana
               </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="reverse-row-nav" >
               <Nav>
                  <Nav.Link href="#industry">
                     <Link
                        activeClass="active-link"
                        to="work-ex"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Journey
                     </Link>
                  </Nav.Link>
                  <Nav.Link href="#projects">
                     <Link
                        activeClass="active-link"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Projects
                     </Link>
                  </Nav.Link>
                  <Nav.Link href="#scores">
                     <Link
                        activeClass="active-link"
                        to="scores"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Scores
                     </Link>
                  </Nav.Link>
                  {/* <Nav.Link href="#contact">Contact Me</Nav.Link> */}
                  <Nav.Link href={CONSTANTS.RESUME_PDF_LINK} target="_blank" rel="noreferrer" download>
                     <Button primary className="download-btn">Download Resume</Button>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      )
   }
}
export default NavBar