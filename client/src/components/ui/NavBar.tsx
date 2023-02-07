import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function MyNavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = (): void => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              {/* <NavLink href="/components/" >Components</NavLink> */}
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/posts">Posts</Link>
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
