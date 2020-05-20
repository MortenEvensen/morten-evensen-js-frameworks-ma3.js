import React from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import News from "./News"

function Layout() {
	return(
		<Router>
			<NavLink to="/" exact>
				Home
			</NavLink>
			<NavLink to="Login" exact>
				Login
			</NavLink>
			<NavLink to="News" exact>
				News
			</NavLink>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Login" exact component={Login} />
				<Route path="/News" exact component={News} />
			</Switch>
		</Router>


	)
}

export default Layout;