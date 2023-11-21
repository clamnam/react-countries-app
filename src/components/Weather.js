import axios from 'axios';
import { useState , useEffect} from 'react';
// import { Row, Col, Spinner, Image, Accordion, Card } from "react-bootstrap";

const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=c1ae794e4fbf4a4a82f173252230111&q=`;

const Weather = (props) =>
{
    
    const [weather,setWeather] = useState([]);
    // console.log(`${weatherUrl}${props.name}&aqi=no.`)


    useEffect(() => {
        
        axios
            .get(`${weatherUrl}${props.name}&aqi=no.`)
            .then((weatherResponse) => {
                const weatherData = weatherResponse.data;
                // console.log(weatherData)
                setWeather(weatherData);
            })
            .catch((weatherError) => {
                console.log("Error fetching weather data: ", weatherError);
            });
    }, [props.name]);
    
let weatherData = <p>There is no weather Data right now</p>;

if (weather?.current?.condition) {
    weatherData = (
        <div>
            <h2>Weather</h2>
            <h5>
                <b>Temp:</b> {weather.current.temp_c} °C
            </h5>
            <h5><b>Feels Like</b> {weather.current.feelslike_c} °C</h5>
            <h5>
                <b>Wind speed:</b> {weather.current.wind_kph} kph
            </h5>
        </div>
    );
}
return (

<>
    {weatherData}
        </>
)};
export default Weather;