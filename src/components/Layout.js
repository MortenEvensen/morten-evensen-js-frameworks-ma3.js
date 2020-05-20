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
			<div className="nav-wrap">
			<NavLink className="nav-element" to="/" exact>
				Home
			</NavLink>
			<NavLink className="nav-element" to="Login" exact>
				Login
			</NavLink>
			<NavLink className="nav-element" to="News" exact>
				News
			</NavLink>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Login" exact component={Login} />
				<Route path="/News" exact component={News} />
			</Switch>
			</div>
		</Router>


	)
}

export default Layout;