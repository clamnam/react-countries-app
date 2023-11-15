import { Link,useNavigate } from 'react-router-dom';
import {NavbarBrand} from 'react-bootstrap'
import { useState } from 'react';
// import {Container } from "react-bootstrap"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from '../pages/Home'
const Navbar = (props) => {

    let Navigate = useNavigate();
    const [searchTerm,setSearchTerm] = useState(props.searchTerm)
    const [isNavHidden, setIsNavHidden] = useState(false);


    const handleInputChange = (e) =>{
        let newval = e.target.value
        // Navigate('/');
        setSearchTerm(newval)
        props.onHandleChange(newval);
        
    }
const NavReduce = ()=>{
    
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                setIsNavHidden(true);
            } else {
                setIsNavHidden(false);
            }
            lastScrollY = window.scrollY;
        });

    
}
const reset =()=>{
    let newval = ''

    setSearchTerm(newval)
    props.onHandleChange(newval);

    Navigate('/');

}
const handleKeyDown = (e) =>{

if(e.nativeEvent.key === "Enter"){
    let newval = e.target.value
    setSearchTerm(newval)
    Navigate('/');

    props.onHandleChange(newval);
}
}
    return (
        <>
        {NavReduce()}
        <nav className={` fixed-top bg-dark ${isNavHidden ? ('nav--hidden'):("nav")}`}>
            
            <Link className='p-3 btn btn-dark' to={'/'} onClick={reset}> <NavbarBrand className='text-white'>Check Out come Countries</NavbarBrand>
</Link>
            <input type='text' onChange={handleInputChange} onKeyDown={handleKeyDown} value={searchTerm} placeholder="Search for countries" />

            </nav>
            
            
        </>
    );
}

export default Navbar;