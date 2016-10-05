import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
 import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends React.Component {

	constructor(props) {
    super(props);
    // This line is important!
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);

  }

  componentWillMount() {
    this.closeNav();  	
  }

	setNavExpanded(expanded) {
	  this.setState({ navExpanded: expanded });
	}
	
	closeNav() {
	  this.setState({ navExpanded: false });
	}

	render() {
		return (
			<Navbar onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#/">React-Bootstrap</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav onSelect={this.closeNav}>
		        <LinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
		        <LinkContainer to="/search"><NavItem eventKey={2}>Search</NavItem></LinkContainer>
		      </Nav>
		      <Nav pullRight>
		        <NavItem eventKey={1} href="#">Link Right</NavItem>
		        <NavItem eventKey={2} href="#">Link Right</NavItem>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
			);
	}
}
