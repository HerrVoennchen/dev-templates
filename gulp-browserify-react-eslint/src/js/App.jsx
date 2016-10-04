require('../index.html');
require('../css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home/Index';
import Layout from './Layout';
import Search from './Search/Index';
import { Router, Route, hashHistory } from 'react-router';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route components={Layout}>
			<Route path="/" components={Home}/>
			<Route path="/search" components={Search}/>
		</Route>
	</Router>,
	app);
