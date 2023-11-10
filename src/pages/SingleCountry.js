import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col, Spinner, Image, Accordion } from "react-bootstrap";
import axios from "axios";

import Weather from "../components/Weather";
import Borders from "../components/Borders";


//////api bits
// const weatherKey = `c1ae794e4fbf4a4a82f173252230111`;
// const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=c1ae794e4fbf4a4a82f173252230111&q=`;
const countryUrl = `https://restcountries.com/v3.1/name/`;
const borderUrl = `https://restcountries.com/v3/alpha/`;

const SingleCountry = () => {
	let { name } = useParams();
	const [country, setCountry] = useState(null);
	const [border, setBorder] = useState([]);
	const [weather, setWeather] = useState(null);

	let BorderCard = border.map((countries, i) => {
		return countries.map((country, j) => (
		  <Borders
			key={`${i}-${j}`}
			name={country.name.common}
			flag={country.flag}
			region={country.region}
		  />
		));
	  });
	  
	
	useEffect(() => {
		axios
		.get(`${countryUrl}${name}?fullText=true`)
		.then((countryResponse) => {
			const countryData = countryResponse.data[0];
			setCountry(countryData);


	
			// Fetch data for each border
			const borderRequests = countryData.borders.map((borderCode) => {
			return axios.get(`${borderUrl}${borderCode}`);
			});
	
			// Use Promise.all to wait for all requests to complete
			Promise.all(borderRequests)
			.then((borderResponses) => {
				const borderData = borderResponses.map((response) => response.data);

				setBorder(borderData);
			})
			.catch((borderErrors) => {
				console.error("Error fetching border data: ", borderErrors);
			});
		})
		.catch((error) => {
			console.error("Error fetching country data: ", error);
		});
	}, [name]);
	
    let WeatherData = () => {
        if (country.name) {
            return <Weather name={country.name.common} />;
        }
    };


	return (
		<div>
			{country ? (
				<>

				<Row>
					<Col className="my-3">
						<Image className="w-100" src={country.flags.svg} />

						<Accordion defaultActiveKey="0" className="my-2">
							<Accordion.Item eventKey="0">
								<Accordion.Header>Bordering Nation</Accordion.Header>
								<Accordion.Body>
									{country.border ? (
										<>{BorderCard}</>
									) : (
										<p>No borders found for this country.</p>
									)}
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>Map</Accordion.Header>
								<Accordion.Body>
									<iframe
										title="map"
										width="100%"
										height="400"
										frameBorder="5"
										src={`https://www.openstreetmap.org/export/embed.html?bbox=${country.latlng[1]},${country.latlng[0]}&zoom=4`}
									></iframe>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
    <Accordion.Header>Weather</Accordion.Header>
    <Accordion.Body>

	{WeatherData()}
	{WeatherData}
    </Accordion.Body>
</Accordion.Item>



							
						</Accordion>

					</Col>
					<Col className="my-3">
						<h1 className="bd-title mb-4">
							<b> {country.name.common}</b>

						</h1>
						<h5>
							<b>Official Name:</b> {country.name.official}
						</h5>
						<h5>
							<b>Continent :</b> {country.region}
						</h5>
						<h5>
							<b>Subregion :</b> {country.subregion}
						</h5>


						</Col>
						
				</Row>
				</>
			) : (
				<Spinner animation="grow" />
			)}
		</div>
	);
};

export default SingleCountry;
