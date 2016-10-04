require('../index.html');
require('../css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { Router, Route, hashHistory } from 'react-router';


const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" components={Layout}/>
	</Router>,
	app);
