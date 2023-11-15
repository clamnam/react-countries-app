import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
    <Router >
            <Navbar onHandleChange={onHandleChange}/>

      <Container fluid className="container-fluid bg-off-white">
      <Container  >
        <Row>
        <Col>
        <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm}/>} />

        <Route path="/" element={<Home/>}/>
        <Route path='/country/:name' element={<SingleCountry/>} />        </Routes>
        </Col>
        </Row>
      </Container>

      </Container>
      <Footer className='fixed-bottom'/>

      </Router>
  );
}

export default App;