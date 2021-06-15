import { useContext } from "react";
import { Card, CardText, CardBody, CardTitle, Button, Form } from 'reactstrap';

import JoblyApi from '../shared/api';
import  addCommas from '../shared/addCommas';
import CurrUserContext from '../auth/CurrUserContext';

function JobCard({ id, name, title, salary, equity }) {
	const { currUser, setCurrUser } = useContext(CurrUserContext);

	const handleBtnForm = async (evt) => {
		evt.preventDefault();

		const jobId = await JoblyApi.applyJob(currUser.username, id);

		if (jobId.applied) {
			const applications = currUser.applications;
			applications.push(jobId.applied);

			setCurrUser(cU => ({
				...cU,
				applications
			}));
		}
	};

	  
    return (
		<Card className="Company mb-4 p-3 shadow-sm">
			<CardBody className="">
				<CardTitle tag="h4" className=""> 
					{ title }
				</CardTitle>
                <h6>{name}</h6>
				<CardText>
                    <small className="d-block">Salary: {salary ? `$${addCommas(salary)}` : 'N/A'}</small>
                    <small className="d-block">Equity: {equity || 0}</small>
                </CardText>
				<Form onSubmit={handleBtnForm}>
					{ !currUser.applications.includes(id)
						? <Button color="success">Apply</Button> 
						: <Button color="success" disabled>Applied</Button> 
					}
				</Form>
			</CardBody>
		</Card>
    );
}

export default JobCard;
  