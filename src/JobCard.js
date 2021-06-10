import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './CompanyCard.css';



function JobCard({ name, title, salary, equity, logoUrl }) {
	  
    return (
		<Card className="Company mb-4 p-3 shadow-sm">
			<CardBody className="">
				<CardTitle tag="h4" className=""> 
					{ title }
				</CardTitle>
				<CardText>
                    <h6>{name}</h6>
                    <div><small>Salary: {salary ? `$${salary}` : 'N/A'}</small></div>
                    <div><small>Equity: {equity || 0}</small></div>
                </CardText>
			</CardBody>
		</Card>
    );
}

export default JobCard;
  