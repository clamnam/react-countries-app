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
                <Link className='p-3 btn btn-dark' to={'/'}>                    Check Out come Countries
</Link>                </Container>
            </Navbar>
        </div>
        
    );
}

export default Footer;


