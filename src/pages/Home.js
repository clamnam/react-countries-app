import axios from 'axios';
import { useState , useEffect } from 'react';
import {Row, Col,Dropdown} from 'react-bootstrap';
import CountryCard from '../components/CountryCard'
// import Dropdown from 'react-navbar/dist/Dropdown';



const URL = `https://restcountries.com/v3.1/`



const Home = (props) => {
    const [countriesList, setCountriesList] = useState([]);
    const [filteredCountriesList, setFilteredCountriesList] = useState([]);
    // const [value, setValue] = useState([]);

    let CountryCards = filteredCountriesList.map((country, i) => {
        return (
            <Col key={i} md={3} xs={12}>
                <CountryCard flag={country.flags.png} name={country.name.common} region={country.region} />
            </Col>
        );
    });


    const handleSelect=(e)=>{
        // console.log
        if(e === "All"){
            setFilteredCountriesList(countriesList);


    }else {
        
        const filteredCountries = countriesList.filter((country) => {
            return country.region.includes(e);
            });
            setFilteredCountriesList(filteredCountries);
        
    }
    }
    

useEffect(() => {
  if (props.searchTerm === '') {
    setFilteredCountriesList(countriesList);
  } else if (props.searchTerm.length >= 1) {
    const filteredCountries = countriesList.filter((country) => {
      return country.name.common.toLowerCase().includes(props.searchTerm.toLowerCase());
    });
    setFilteredCountriesList(filteredCountries);
  } else {
    setFilteredCountriesList([]);
  }
}, [countriesList, props.searchTerm]);

///////////////////////////////////////////////////////////////Get all countries

    useEffect(() => {
        
        getAllCountries();
    }, []);

    const getAllCountries = () =>{
            axios.get(`${URL}all`).then(response =>{
                // console.log(response.data)
                setCountriesList(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
        
    }

///////////////////////////////////////////////////////////////






    return (
        <div className='my-5'>
        
        <Row className='g-2 my-5 m-3  '>
        <Col className='p-0'>

        <Dropdown className='mt-3 primary'onSelect={handleSelect}>
        <Dropdown.Toggle className='' variant="success" id="dropdown-basic">
        Region Selector
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item eventKey="" >All</Dropdown.Item>

        <Dropdown.Item eventKey="Africa" >Africa</Dropdown.Item>
        <Dropdown.Item eventKey="Europe" >Europe</Dropdown.Item>
        <Dropdown.Item eventKey="Oceania" >Oceania</Dropdown.Item>
        <Dropdown.Item eventKey="Americas" >Americas</Dropdown.Item>

        <Dropdown.Item eventKey="Asia" >Asia</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

        </Col>
        </Row>
        <Row className='g-2 m-3 mb-5' md={5} xs={1}>
        
        
        
            {CountryCards}
        </Row>
        </div>
    );

};
export default Home;