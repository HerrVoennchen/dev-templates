import { combineReducers, applyMiddleware, createStore } from 'redux';

import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
	fetching: false,
	fetched: false,
	users:[],
	error: null
}

const reducer = (state={}, action) => {
	switch(action.type) {
		case 'FETCH_USERS_PENDING': {
			return {...state, fetching: true};
			break;
		}
		case 'FETCH_USERS_FULFILLED': {
			return {...state, fetching: false, fetched: true, users: action.payload};
			break;
		}
		case 'FETCH_USERS_REJECTED': {
			return {...state, fetching: false, fetched: false, err: action.payload};
			break;
		}
	}

	return state;
}


const middleware = applyMiddleware(thunk, logger(), promise());
const store = createStore(reducer, middleware);

/*
store.dispatch((dispatch) => {
	dispatch({type: 'FETCH_USERS_START'});
	axios.get('http://rest.learncode.academy/api/wstern/users')
		.then((response) => {
			// do ssomthing async here
			dispatch({type: 'RECEIVE_USERS', payload: response.data});	
		})
		.catch((err) => {
			dispatch({type: 'FETCH_USERS_ERROR', payload: err});
		});
});
*/

store.dispatch({
	type: 'FETCH_USERS',
	payload: axios.get('http://rest.learncode.academy/api/wstern/users')
});