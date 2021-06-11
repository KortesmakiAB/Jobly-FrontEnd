import { Card, CardText, CardBody, CardTitle } from 'reactstrap';


function JobCard({ name, title, salary, equity }) {
	  
    return (
		<Card className="Company mb-4 p-3 shadow-sm">
			<CardBody className="">
				<CardTitle tag="h4" className=""> 
					{ title }
				</CardTitle>
                <h6>{name}</h6>
				<CardText>
                    <small className="d-block">Salary: {salary ? `$${salary}` : 'N/A'}</small>
                    <small className="d-block">Equity: {equity || 0}</small>
                </CardText>
			</CardBody>
		</Card>
    );
}

export default JobCard;
  