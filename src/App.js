
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container , Row , Col} from "react-bootstrap"
import './assets/app.css'

import Home from "./pages/Home"
import SingleCountry from './pages/SingleCountry'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router >
            <Navbar />

      <Container fluid className="container-fluid bg-off-white">
      <Container  >
        <Row>
        <Col>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/country/:name' element={<SingleCountry/>} />        </Routes>
        </Col>
        </Row>
      </Container>

      </Container>
      <Footer />

      </Router>
  );
}

export default App;
