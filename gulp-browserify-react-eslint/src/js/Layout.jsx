import React from 'react';

import Navigation from './Nav';

export default class Layout extends React.Component {

	static propTypes = {
		children: React.PropTypes.object.isRequired
	}

	render() {
		return (
			<div>
				<Navigation/>
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
			);
	}
}
