import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import './assets/app.css'

import Home from "./pages/Home"
import SingleCountry from './pages/SingleCountry'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  
  const [searchTerm, setSearchTerm] = useState('');

  const onHandleChange = (e)=>{
    setSearchTerm(e);
  }
  

  
  return (
    <div className='bg-off-white'>
    <Router >
        <Navbar onHandleChange={onHandleChange}/>

        <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm}/>} />


        <Route path='/country/:name' element={<SingleCountry/>} />        </Routes>

      <Footer className='fixed-bottom'/>

      </Router>
      </div>
  );
}

export default App;