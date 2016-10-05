import React from 'react';

export default class Search extends React.Component {

	term = '';

	constructor(props) {
		super(props);

		this.term = this.props.term;

		this.handleChange = this.handleChange.bind(this);
		this.submitChange = this.submitChange.bind(this);
	}

	handleChange(e) {
		this.term = e.target.value;
	}

	submitChange() {
		this.props.changeSearch(this.term);
	}


	render() {
		return (
			<div className="panel panel-primary">
			    <div className="panel-heading">Projektsuche</div>
			    <div className="panel-body">
			      <div className="form-group">
			        <div className="container-fliud">
			          <div className="row">
			            <div className="col-md-2 col-sx-12">
			              <label htmlFor="project_name">Name</label>
			            </div>
			            <div className="col-md-10 col-sx-12">
			              <input type="text" className="form-control" id="project_name" onChange={this.handleChange} />
			            </div>
			          </div>
			          <div className="row">
			            <div className="col-md-2 col-sx-12"/>
			            <div className="col-md-10 col-sx-12">
			              <button className="btn btn-default" onClick={this.submitChange}>Suchen</button>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			);
	}
}
