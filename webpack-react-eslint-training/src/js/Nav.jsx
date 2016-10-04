import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
						</button>
						<a className="navbar-brand" href="#">enaio Training</a>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li activeClassName="active" onlyActiveOnIndex={true}>
								<Link to="/" data-toggle="collapse" data-target=".navbar-collapse">Home</Link>
							</li>
							<li activeClassName="active">
								<Link to="search" data-toggle="collapse" data-target=".navbar-collapse">Search</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			);
	}
}
