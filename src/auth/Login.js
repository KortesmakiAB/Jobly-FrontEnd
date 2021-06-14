import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

import JoblyApi from '../shared/api';
import CurrUserContext from './CurrUserContext';
import useLocalStorage from '../shared/useLocalStorage';
import { TOKEN_STORAGE_KEY } from '../Jobly/Jobly';

import './Login.css';

function Login() {
	const initialState = {
		username: 'testUserName',
		password: 'testPassword',
	}
	const [unPw, setUnPw] = useState(initialState);
	const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);

	const { setCurrUser } = useContext(CurrUserContext);
	const history = useHistory();
    
    const handleChange = (evt) => {
		const { name, value } = evt.target;
        setUnPw(uP => ({
			...uP,
			[name]: value
		}));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

		(async () => {
			const respToken = await JoblyApi.signIn(unPw);

			if (respToken){
				JoblyApi.token = respToken;
				setToken(respToken);
				
				const user = await JoblyApi.getUser(unPw.username);
				setCurrUser(() => ({
					...user,
				}));
			}

			history.push('/');
		})();
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
						placeholder=""
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
						placeholder=""
					></Input>
				</FormGroup>
				
				<Button color="primary" className="" >Submit</Button>
			</Form>
		</div>
        
    );
}

export default Login;
  