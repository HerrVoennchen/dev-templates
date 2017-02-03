import '../css/app.css';
import 'jquery';
import 'tether';
import 'bootstrap';

import React from 'react';
import { render } from 'react-dom';

render(
	<div>
		<h1>Hello, World! 2</h1>
		<br/>
		<button type="button" className="btn btn-secondary">Primary</button>
	</div>,
	document.getElementById('App')
	);