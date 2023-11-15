import {Link} from 'react-router-dom';
import {Button,Logo, Container ,Navbar , NavbarBrand} from 'react-bootstrap'
// import {Container } from "react-bootstrap"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
const Footer = () => {
    return (
        <div className="fixed-bottom">  
            <Navbar className='bg-dark'>
                <Container>
                    <NavbarBrand className='text-white'>Check Out come Countries</NavbarBrand>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default Footer;


