import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import Login from './containers/Login'
import ListingArchive from './containers/ListingArchive'
import ListingEntry from './components/ListingEntry'
import ListingAdd from './components/ListingAdd'


const checkAuth = () => {
	const cookies = cookie.parse(document.cookie)
	return cookies["loggedIn"] ? true : false
}


const ProtectedRoute = ({component: Component, ...rest}) => {
	return (
		<Route
		{...rest}
		render={(props) => checkAuth()
			? <Component {...props} />
			: <Redirect to="/login" />}
		/>
	)
}


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
			<Route path="/listings" component={ListingArchive} />
			<Route path="/listings/:id" component={ListingEntry} />
            <ProtectedRoute path="/listings/add" component={ListingAdd} />
			<Route path="/login" component={Login} />
        </Switch>
    );
};

export default Router;