import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import AssignmentsList from "./containers/AssignmentsList";
import AssignmentsDetail from "./containers/AssignmentsDetails";

const BaseRouter = () => (
	<Hoc>
		<Route exact path="/" component={AssignmentsList} />
		<Route exact path="/assignments/:id" component={AssignmentsDetail} />
		<Route exact path="/login/" component={Login} />
		<Route exact path="/signup/" component={Signup} />
		<Route exact path="/profile/:id" component={Profile} />
	</Hoc>
);

export default BaseRouter;
