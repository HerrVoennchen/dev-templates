import '../css/app.css';


import React from 'react';
import reactDom from 'react-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

reactDom.render(
	<div>
		<Header/>
		<Content/>
		<Footer/>
	</div>,
	document.getElementById('App')
	);