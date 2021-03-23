/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Employeedashboard from "./employee_dashboard";
console.log("dashboard index sss");
const DashboardRoute = ({ match }) => (
  <Switch>
    <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/employee-dashboard`}
    />
    <Route
      path={`${match.url}/employee-dashboard`}
      component={Employeedashboard}
    />
  </Switch>
);

export default DashboardRoute;
