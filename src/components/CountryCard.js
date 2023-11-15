import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
const CountryCard = (props) =>{
    return (
        <Card className='p-1 my-1'>
            <Card.Img src={props.flag} variant='top'></Card.Img>
            <Card.Body>
                <Card.Title><Link to={`/country/${props.name}`}>{props.name}</Link></Card.Title>
                <p>{props.region}</p>
            </Card.Body>
        </Card>
    )
}
export default CountryCard;