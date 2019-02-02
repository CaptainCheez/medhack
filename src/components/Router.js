import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './Main/main';
import SingleView from './SingleView/single';
import Navbar from './Navbar/navbar';
const Router = () => (
	
	<BrowserRouter>
		<div className="page_container">
				<Navbar/>
				<div className="page_content">
					<Switch>
						<Route path="/" component={Main} exact />
						<Route path="/place/:id" component={SingleView} exact />
					</Switch>
				</div>
		</div>
	</BrowserRouter>
);

export default Router;