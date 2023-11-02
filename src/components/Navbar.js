import {Link} from 'react-router-dom';
import {Button,Logo} from 'react-bootstrap'
// import {Container } from "react-bootstrap"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
const Navbar = () => {
    return (
        <>
        <div className='bg-dark '>
            <Link className='p-3 btn btn-dark' to={'/'}>All Countries</Link>
            
            </div>
        </>
    );
}

export default Navbar;



