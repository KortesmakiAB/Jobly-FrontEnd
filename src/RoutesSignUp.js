import { useState } from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

import './RoutesSignUp.css';


function SignUp({ handleSearch }) {
    const [formData, setFormData] = useState({});

    const handleChange = (evt) => {
		const { name, value } = evt.target;
        setFormData(data => ({
			...data,
			[name]: value
		}));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

		// TODO
        // handleSearch(search);

		// Redirect

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
						value={formData.username} 
						onChange={handleChange}
					></Input>
				</FormGroup>
				<FormGroup className="mb-3">
					<Label for="password" className="my-1">Password</Label>
					<Input 
						id="password" 
						name="password"
						type="text"
						value={formData.password} 
						onChange={handleChange}
					></Input>
				</FormGroup>
				<FormGroup className="mb-3">
					<Label for="firstName" className="my-1">First Name</Label>
					<Input 
						id="firstName" 
						name="firstName"
						type="text"
						value={formData.firstName} 
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
						value={formData.email} 
						onChange={handleChange}
					></Input>
				</FormGroup>
				
				<Button color="primary" className="" >Submit</Button>
			</Form>
		</div>
        
    );
}

export default SignUp;
  