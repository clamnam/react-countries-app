import { Link,useNavigate } from 'react-router-dom';
import {Button,Logo,NavbarBrand} from 'react-bootstrap'
import { useState } from 'react';
// import {Container } from "react-bootstrap"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from '../pages/Home'
const Navbar = (props) => {

    let Navigate = useNavigate();
    const [searchTerm,setSearchTerm] = useState(props.searchTerm)

    const handleInputChange = (e) =>{
        let newval = e.target.value
        // Navigate('/');
        setSearchTerm(newval)
        props.onHandleChange(newval);
    }

    
    return (
        <>
        <div className='bg-dark '>
            <Link className='p-3 btn btn-dark' to={'/'}>                    <NavbarBrand className='text-white'>Check Out come Countries</NavbarBrand>
</Link>
            <input type='text' onChange={handleInputChange} value={searchTerm} placeholder="Search for countries" />

            </div>
        </>
    );
}

export default Navbar;