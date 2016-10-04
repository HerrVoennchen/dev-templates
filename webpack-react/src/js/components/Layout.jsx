import React from 'react';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<h1>Erste React-Website</h1>
				<button className="btn btn-default">Testclick 1</button>
				<button className="btn btn-danger">Testclick 2</button>
				<button className="btn btn-success">Testclick 3</button>
				<button className="btn btn-warning">Testclick 4</button>
				<button className="btn btn-primary">Testclick 5</button>
				<button className="btn btn-info">Testclick 6</button>
			</div>
			);
	}
}
