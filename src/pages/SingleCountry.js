import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col, Spinner, Image, Accordion ,Container} from "react-bootstrap";
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

	let BorderCard = border.map((countries, i) => {
		return countries.map((country, j) => (
		<Borders
			key={`${i}-${j}`}
			id={`${i}-${j}`}
			name={country.name.common}
			// flag={country.demonyms.flag}
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
		<Container fluid className="">
			{country ? (
			<Row className="my-5  bg-off-white ">
								<h1 className="bd-title text-center mt-4">
							<b> {country.name.common}</b>

						</h1>
				<Col><Image className=" my-3" src={country.flags.svg} fluid/></Col>
				<Col className="my-3">
					


<Row>
<Col className="my-4">

<h4>
	<b>Official Name:</b> {country.name.official}
</h4>
<h4>
	<b>Continent :</b> {country.region}
</h4>
<h4>
	<b>Subregion :</b> {country.subregion}
</h4>


</Col>

							{WeatherData()}
							{WeatherData}


</Row>
					</Col>

						<Accordion className="">						<Accordion.Item eventKey="1">
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
						</Accordion.Item><Accordion.Item className="mb-3"eventKey="2">
    						<Accordion.Header>
							Bordering Nations
							</Accordion.Header>
    						<Accordion.Body>
								{border[0] ? (
									<>{BorderCard}</>
								) : (
									<p>No borders found for this country.</p>
								)}
									

    						</Accordion.Body>
						</Accordion.Item></Accordion>
				</Row>
				) : (
					<Spinner animation="grow" />
				)}
				</Container>
	);
};

export default SingleCountry;
