import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from "reactstrap";

import CurrUserContext from '../auth/CurrUserContext';
import useLocalStorage from './useLocalStorage'; 
import { TOKEN_STORAGE_KEY } from '../Jobly/Jobly';
import './Navbar.css';

function NavBar() {
	const [collapsed, setCollapsed] = useState(true);
	const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);

	const { currUser, setCurrUser } = useContext(CurrUserContext);
	const history = useHistory();

	const toggleNavbar = () => setCollapsed(!collapsed);

	const handleLogOut = () => {
		setCurrUser(null);
		setToken(null);

		history.push('/');
	};

	const authorized = () => {
		return (
			<Nav navbar>
				<NavItem>
					<NavLink exact to="/companies" className="nav-link">Companies</NavLink>
				</NavItem>
				<NavItem>
					<NavLink exact to="/jobs" className="nav-link">Jobs</NavLink>
				</NavItem>
				<NavItem>
					<NavLink exact to="/profile" className="nav-link">Profile</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={handleLogOut} to="/" className="nav-link">Logout {currUser.firstName}</NavLink>
				</NavItem>
			</Nav>
		);
	};

	const unAuthorized = () => {
		return (
			<Nav navbar>
				<NavItem>
					<NavLink to="/login" className="nav-link">Login</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/signup" className="nav-link">Sign up</NavLink>
				</NavItem>
			</Nav>		
		);
	};

	return (
		<div className="NavBar m-4">
			<Navbar expand="md" light >
				<NavbarBrand href="/">Jobly</NavbarBrand>
				
				<NavbarToggler onClick={toggleNavbar} />
				<Collapse isOpen={!collapsed} navbar className="NavBar-collapsed justify-content-end">
					{ currUser ? authorized() : unAuthorized() }
				</Collapse>
			</Navbar>
		</div>
  );
}

export default NavBar;
