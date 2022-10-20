import { Container, Nav, Navbar } from 'react-bootstrap';   //terminal command 'npm install react-bootstrap bootstrap'
import { useEffect, useState } from 'react';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');  //used to show which navbar link is active
    const [scrolled, setScrolled ] = useState(false);  //used to customize scrolling effect

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
    
        }
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => { 
        setActiveLink(value);
    }

    
    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#/">
                        <img src={logo} alt="React Portfolio" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

                        {/****** Drop Down Menu If Needed ********
                        
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown> */}

                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""/></a>
                            <a href="#"><img src={navIcon2} alt=""/></a>
                            <a href="#"><img src={navIcon3} alt=""/></a>
                        </div>
                        <HashLink to='#connect'>
                            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                        </HashLink>
                    </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
    
}
