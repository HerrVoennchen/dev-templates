import React from 'react';

var moment = require('moment');

export default class Results extends React.Component {

	constructor(props) {
		super(props);
	}


	findValue(fields, name) {
		for(var i in fields) {
			var f = fields[i];
			if(f.internalName === name) {
				return f.value;
			}
		}

		return '';
	}

	render() {
		const { results } = this.props;

		const mappedResults = results.map(res => 
					<tr key={res.osid}>
						<th scope="row">{this.findValue(res.ecmSimpleFields, 'PROJECTNAME')}</th>
						<td>{this.findValue(res.ecmSimpleFields, 'PROJECTMANAGER')}</td>
						<td>{moment(this.findValue(res.ecmSimpleFields, 'PROJECTSTART'), 'x').format('DD.MM.YYYY')}</td>
						<td>{moment(this.findValue(res.ecmSimpleFields, 'PROJECTEND'), 'x').format('DD.MM.YYYY')}</td>
					</tr>
					);

		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Projektname</th>
						<th>Projektleitung</th>
						<th>Projektbeginn</th>
						<th>Projektende</th>
					</tr>
				</thead>
				<tbody>
					{mappedResults}
				</tbody>
			</table>

			);
	}
}
