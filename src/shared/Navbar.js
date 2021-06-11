import React, { useState, useContext } from 'react';
import CurrUserContext from '../auth/CurrUserContext';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink } from "reactstrap";
import './Navbar.css';

function NavBar() {
	const [collapsed, setCollapsed] = useState(true);

	const { currUser } = useContext(CurrUserContext);
	console.log('NavBar-currUser', currUser)

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div className="NavBar m-4">
			<Navbar expand="md" light >
				<NavbarBrand href="/">Jobly</NavbarBrand>
				
				<NavbarToggler onClick={toggleNavbar} />
				<Collapse isOpen={!collapsed} navbar className="NavBar-collapsed justify-content-end">
					{ currUser
						? (
							<Nav navbar>
								<NavItem>
									<NavLink href="/companies">Companies</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/jobs">Jobs</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/profile">Profile</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/TODO">Logout {currUser.firstName}</NavLink>
								</NavItem>
							</Nav>
						)
						: (
							<Nav navbar>
								<NavItem>
									<NavLink href="/login">Login</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/signup">Sign up</NavLink>
								</NavItem>
							</Nav>		
						)
					}
				</Collapse>
			</Navbar>
		</div>
  );
}

export default NavBar;
