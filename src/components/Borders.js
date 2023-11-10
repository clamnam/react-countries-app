import { useParams,Link } from "react-router-dom";
import {Card } from "react-bootstrap";
import axios from "axios";



const Borders = (props) =>{



    return (
        <Card className='p-1'>
            <Card.Img src={props.flag} variant='top'></Card.Img>
            <Card.Body>
                <Card.Title><Link to={`/country/${props.name}`}>{props.name}</Link></Card.Title>
                <p>{props.region}</p>
            </Card.Body>
        </Card>
    )

}
export default Borders;