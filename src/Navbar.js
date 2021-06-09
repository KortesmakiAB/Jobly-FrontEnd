import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink } from "reactstrap";
import './Navbar.css';

function NavBar() {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div className="NavBar m-4">
			<Navbar expand="md" light >
				<NavbarBrand href="/">Jobly</NavbarBrand>
				
				<NavbarToggler onClick={toggleNavbar} />
				<Collapse isOpen={!collapsed} navbar className="NavBar-collapsed justify-content-end">
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
					</Nav>
				</Collapse>
			</Navbar>
		</div>
  );
}

export default NavBar;
