import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Container } from 'reactstrap';


class Header extends Component {

	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render () {
		return (
	    <header>
            <Container>
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">smart_with_server</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/campaigns">Campaigns</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/campaigns/new">+</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            </Container>
	    </header>
	  )
	}
}

export default Header;