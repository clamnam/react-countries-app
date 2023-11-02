import axios from 'axios';
import { useState , useEffect } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import CountryCard from '../components/CountryCard'



const URL = `https://restcountries.com/v3.1/`



const Home = () => {
    const [countriesList,setCountriesList] = useState([]);
    const [term, setTerm] = useState('');
    // const [countries, setCountries] = useState([]);


    let CountryCards = countriesList.map((country,i)=>{
        return <CountryCard key={i} name={country.name.common} flag={country.flags.svg} region={country.region}/>
    });



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


const handleChange = (e) => {
    setTerm(e.target.value);
};
const handleClick = () => {
    searchCountries();};
    
    const searchCountries = () => {

        
        if (!term) {
            alert('Please enter a search term!');
        return;
        }
        axios.get(`${URL}name/${term}`)
        .then((response) => {
            // console.log(response.data);
            setCountriesList(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };



    return (
        <>
        
        <Row className='my-3'>
        <Col className='p-0'>
        <input className='m-2 p-2 border-0'  type="text" value={term} onChange={handleChange}  />
        
        
        <Button className='m-2 p-2 bg-secondary border-0'  variant="primary" onClick={handleClick}>Search</Button>
        </Col>
        </Row>
        <Row className='g-2' md={3} xs={1}>
        
        
        
            {CountryCards}
        </Row>
        </>
    );

};
export default Home;