import axios from 'axios';
import { useState , useEffect } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import CountryCard from '../components/CountryCard'



const URL = `https://restcountries.com/v3.1/`



const Home = (props) => {
    const [countriesList, setCountriesList] = useState([]);
    const [filteredCountriesList, setFilteredCountriesList] = useState([]);
    const [term, setTerm] = useState('');
    // const [countries, setCountries] = useState([]);

    let CountryCards = filteredCountriesList.map((country, i) => {
        return (
            <Col key={i} md={3} xs={12}>
                <CountryCard flag={country.flags.png} name={country.name.common} region={country.region} />
            </Col>
        );
    });

///////////////////////////////////////////////////////////////Search Handle Change
    const handleChange = (e) => {
        const newSearchTerm = e.target.value;
        console.log("here")
        setTerm(newSearchTerm);

        if (newSearchTerm === '') {
            setFilteredCountriesList(countriesList);
        } else if (newSearchTerm.length >= 1 && countriesList.length >= 1) {
            const filteredCountries = countriesList.filter((country) => {
                return country.name.common.toLowerCase().includes(newSearchTerm.toLowerCase());
            });
            setFilteredCountriesList(filteredCountries);
        } else {
            setFilteredCountriesList([]);
        }
    };
    

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
        <>
        
        <Row className='my-3 '>
        <Col className='p-0'>

        
        {/* <Button className='m-2 p-2 bg-secondary border-0'  variant="primary" onClick={handleClick}>Search</Button> */}
        </Col>
        </Row>
        <Row className='g-2 m-4' md={5} xs={1}>
        
        
        
            {CountryCards}
        </Row>
        </>
    );

};
export default Home;