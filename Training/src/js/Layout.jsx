import React from 'react';

import axios from 'axios';
import Search from './Search/Index';
import Results from './Results/Index';

export default class Layout extends React.Component {

	rest = undefined;

	constructor() {
		super();

		this.state = {
			searchTerm: "",
			results: []
		}

		this.rest = axios.create();
		this.rest.defaults.headers.common['Authorization'] = 'Basic cm9vdDpvcHRpbWFs';

		this.changeSearchTerm = this.changeSearchTerm.bind(this);
	}

/*	static propTypes = {
		children: React.PropTypes.object.isRequired
	}*/

	changeSearchTerm(searchTerm) {
		this.setState({searchTerm: searchTerm, results: []});

		console.log(searchTerm);
		console.log(this.state);
		//Start search

		const that = this;


		this.rest.post('http://192.168.1.129/osrest/api/documents/search', {
			query : {
				cabinet: 'PROJECT',
				name: 'PROJECT',
				fields: {
					'PROJECTNAME': {
						'value': '*' + searchTerm + '*'
					}
				}
			}
		})
		.then(function(response) {
			console.log(response);
			that.setState({results: response.data});
			console.log(that.state);
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				<Search changeSearch={this.changeSearchTerm} term={this.state.searchTerm}/>
				<Results results={this.state.results}/>
			</div>
			);
	}
}
