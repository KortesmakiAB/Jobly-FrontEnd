import { useState, useContext } from 'react';
import CurrUserContext from './CurrUserContext';
import { useHistory } from 'react-router-dom';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import JoblyApi from '../shared/api';

import './SignUp.css';


function SignUp() {
	const { setCurrUser } = useContext(CurrUserContext);
	const history = useHistory(); 

	const initialState = {
		username: 'testUserName',
		password: 'testPassword',
		firstName: 'testFirst',
		lastName: 'testLast',
		email: 'test@test.com'
	}
    const [formData, setFormData] = useState(initialState);

    const handleChange = (evt) => {
		const { name, value } = evt.target;
        setFormData(data => ({
			...data,
			[name]: value
		}));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

		(async () =>{
			const token = await JoblyApi.signUp(formData);
			JoblyApi.token = token;

			const user = await JoblyApi.getUser(formData.username);
			setCurrUser(() => ({
				...user,
				token
			}));
		})();
		
		history.push('/');
    };

    return (
		<div className="SignUp">
			<h3>SignUp</h3>
			<Form className="border mt-4 p-4" onSubmit={handleSubmit}>
				<FormGroup className="mb-3">
					<Label for="username" className="my-1">Username</Label>
					<Input 
						id="username" 
						name="username"
						type="text"
						value={formData.username }
						onChange={handleChange}
					></Input>
				</FormGroup>
				<FormGroup className="mb-3">
					<Label for="password" className="my-1">Password</Label>
					<Input 
						id="password" 
						name="password"
						type="password"
						value={formData.password }
						onChange={handleChange}
					></Input>
				</FormGroup>
				<FormGroup className="mb-3">
					<Label for="firstName" className="my-1">First Name</Label>
					<Input 
						id="firstName" 
						name="firstName"
						type="text"
						value={formData.firstName } 
						onChange={handleChange}
					></Input>
				</FormGroup>
				<FormGroup className="mb-3">
					<Label for="lastName" className="my-1">Last Name</Label>
					<Input 
						id="lastName" 
						name="lastName"
						type="text"
						value={formData.lastName} 
						onChange={handleChange}
					></Input>
				</FormGroup>
				<FormGroup className="mb-3">
					<Label for="email" className="my-1">Email</Label>
					<Input 
						id="email" 
						name="email"
						type="text"
						value={formData.email }
						onChange={handleChange}
					></Input>
				</FormGroup>
				
				<Button color="primary" className="" >Submit</Button>
			</Form>
		</div>
    );
}

export default SignUp;
  