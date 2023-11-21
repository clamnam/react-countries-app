import {Link} from 'react-router-dom';
import {Button,Logo, Container ,Navbar , NavbarBrand} from 'react-bootstrap'
// import {Container } from "react-bootstrap"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
const Footer = () => {
    return (
        <div className="fixed-bottom">  
            <Navbar className='bg-dark'>
                
                <Link className=' btn btn-dark text-off-white' to={'/'}>Check Out come Countries</Link>                
            </Navbar>
        </div>
        
    );
}

export default Footer;


