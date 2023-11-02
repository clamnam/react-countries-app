import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col, Spinner, Image, Accordion , Card } from "react-bootstrap";
import axios from "axios";

import Weather from "../components/Weather";

//////api bits
const weatherKey = `c1ae794e4fbf4a4a82f173252230111`;
const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=c1ae794e4fbf4a4a82f173252230111&q=`;
const countryUrl = `https://restcountries.com/v3.1/name/`;
const SingleCountry = () => {
	let { name } = useParams();
	const [country, setCountry] = useState(null);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		axios
			.get(`${countryUrl}${name}?fullText=true`)
			.then((countryResponse) => {
				const countryData = countryResponse.data[0];
				setCountry(countryData);
				console.log(countryData);

				axios
					.get(`${weatherUrl}${name}&aqi=no.`)
					.then((weatherResponse) => {
						const weatherData = weatherResponse.data;
						setWeather(weatherData);
					})
					.catch((weatherError) => {
						console.log("Error fetching weather data: ", weatherError);
					});
			})
			.catch((error) => {
				console.log("Error fetching country data: ", error);
			});
	}, [name]);

	const borders = () => {
		let arr = [];
		for (let x = 0; x < country.borders.length(); x++) {
			arr.push(country.borders[x]);
		}
		return arr;
	};

	return (
		<div>
			{weather ? (
				<Row>
					<Col className="my-3">
						<Image src={country.flags.svg} />
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
						<Accordion className=" p-1">
							<Accordion.Item>
								<Accordion.Header>Bordering Nations</Accordion.Header>
								<Accordion.Body>
									{country.borders ? (
										country.borders.map((border, index) => (
											<div key={index}>{border}</div>
										))
									) : (
										<p>No borders found for this country.</p>
									)}
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item>
								<Accordion.Header>Map</Accordion.Header>
								<Accordion.Body>
                <iframe
                    width="100%"
                    height="400"
                    frameBorder="0"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${country.latlng[1]},${country.latlng[0]}`}
                ></iframe>

									<br />
									<small>
										<a href={country.maps.openStreetMaps}>View Larger Map</a>
									</small>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
						<Col>
							<h2>
								<b>Weather</b>
							</h2>
							<div>
							{weather?.current?.condition && (
                                    <div>
                                        <h6>
                                            <b>Temp:</b> {weather.current.temp_c}
                                        </h6>
                                        <h6>
                                            <b>Condition:</b> {weather.current.condition.condition}
                                        </h6>
                                    </div>
                                )}
							</div>
						</Col>
					</Col>
				</Row>
			) : (
				<Spinner animation="grow" />
			)}
		</div>
	);
};

export default SingleCountry;
