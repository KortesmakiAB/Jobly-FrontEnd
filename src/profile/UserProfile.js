import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import CurrUserContext from '../auth/CurrUserContext';
import JoblyApi from '../shared/api';

// import './UserProfile.css';



function Profile() {
	const { currUser, setCurrUser } = useContext(CurrUserContext);
	const currUserPw = currUser.password;
	const [formData, setFormData] = useState({
		...currUser,
		password: ''
	});	
	const history = useHistory();

	const handleChange = (evt) => {
		const { name, value } = evt.target;
        setFormData(data => ({
			...data,
			[name]: value
		}));
    };

	const handleSubmit = (evt) => {
        evt.preventDefault();

		(async () => {
			const token = await JoblyApi.signIn({ username: currUser.username, password:formData.password });

			if (currUser.token === token){
				const currUserCopy = {...currUser}
				delete currUserCopy.username;
				const updatedUser = await JoblyApi.updateUser(currUser.username, currUserCopy);
				setCurrUser(() => ({
					...updatedUser,
				}));
				console.log('user', updatedUser)
			}

			history.push('/');
		})();

    };


    return (
		<div className="SignUp">
			<h3>Profile</h3>
			<Form className="border mt-4 p-4" onSubmit={handleSubmit}>
				<FormGroup className="mb-3">
					<Label for="username" className="my-1">Username</Label>
					<Input 
						id="username" 
						name="username"
						type="text"
						value={formData.username }
						onChange={handleChange}
						disabled
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
				<FormGroup className="mb-3">
					<Label for="password" className="my-1">Confirm password to make changes</Label>
					<Input 
						id="password" 
						name="password"
						type="password"
						value={formData.password }
						onChange={handleChange}
					></Input>
				</FormGroup>
				
				<Button color="primary" className="" >Save Changes</Button>
			</Form>
		</div>
    );
}

export default Profile;
  