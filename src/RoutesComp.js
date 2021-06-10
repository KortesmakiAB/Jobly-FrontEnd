import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './RoutesComp.css';
import logo1 from './logos/logo1.png';
import logo2 from './logos/logo2.png';
import logo3 from './logos/logo3.png';
import logo4 from './logos/logo4.png';

function Company({ name, description, logoUrl }) {
	const logos = {
		'/logos/logo1.png': logo1,
		'/logos/logo2.png': logo2,
		'/logos/logo3.png': logo3,
		'/logos/logo4.png': logo4,		
	}
  
    return (
		<Card className="Company mb-4 p-3 shadow-sm">
			<CardBody className="">
				<CardTitle tag="h6" className="">
					{ name }
					<img src={logos[logoUrl]} alt={`${name} logo`} className=""></img>
				</CardTitle>
				<CardText><small>{ description }</small></CardText>
			</CardBody>
		</Card>
    );
}

export default Company;
  