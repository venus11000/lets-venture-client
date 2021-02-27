import React, { Component } from "react";
import "../styleGuide/commonStyles.scss";
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Homepage from "../containers/Homepage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => localStorage.getItem("authToken") ? (
			<Component {...props} />
		) : (
				null
				// <Redirect
				// 	to={{
				// 		pathname: "not-found-page",
				// 		state: { from: props.location }
				// 	}}
				// />
			)}
	/>
);

class Routes extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Header />
					<div className="main">
						<Route exact path="/" component={Homepage} />
					</div>
					<Footer />
					<Popup />
				</Router>
				<ToastContainer />
			</React.Fragment>
		);
	}
}

export default Routes;