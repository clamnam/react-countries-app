import { Link } from "react-router-dom";
import {Card  } from "react-bootstrap";



const Borders = (props) =>{



    return (
        <Card className='p-1'>
            {/* <Image src={props.flag} variant='top'/> */}
            <Card.Body>
                <Card.Title><Link to={`/country/${props.name}`}>{props.name}</Link></Card.Title>
                <p>{props.region}</p>
            </Card.Body>
        </Card>
        
    )

}
export default Borders;