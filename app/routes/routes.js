import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import MovieListContainer from '../containers/MovieListContainer';
import AboutContainer from '../containers/AboutContainer';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path='/details/:title' component={MovieListContainer}/>
			<Route path='/about' component={AboutContainer}/>
		</Route>
	</Router>
)

export default routes;