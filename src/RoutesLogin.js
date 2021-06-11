import { useState } from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

import './RoutesLogin.css';


function Login({ handleSearch }) {
    const [unPw, setUnPw] = useState({});
    

    const handleChange = (evt) => {
		const { name, value } = evt.target;
        setUnPw(uP => ({
			...uP,
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
		<div className="Login">
			<h3>Login</h3>
			<Form className="border mt-4 p-4" onSubmit={handleSubmit}>
				<FormGroup className="mb-3">
					<Label for="username" className="my-1">Username</Label>
					<Input 
						id="username" 
						name="username"
						type="text"
						value={unPw.username} 
						onChange={handleChange}
					></Input>
				</FormGroup>
				<FormGroup className="mb-3">
					<Label for="password" className="my-1">Password</Label>
					<Input 
						id="password" 
						name="password"
						type="password"
						value={unPw.password} 
						onChange={handleChange}
					></Input>
				</FormGroup>
				
				<Button color="primary" className="" >Submit</Button>
			</Form>
		</div>
        
    );
}

export default Login;
  