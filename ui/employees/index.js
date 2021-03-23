import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AllEmployees from "./allemployees";
import AllEmployeesList from "./employeeslist";
import Holidays from "./holidays";
import LeaveEmployee from "./leaveemployee";

const EmployeesRoute = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/allemployees`} />
    <Route path={`${match.url}/allemployees`} component={AllEmployees} />
    <Route path={`${match.url}/employees-list`} component={AllEmployeesList} />
    <Route path={`${match.url}/holidays`} component={Holidays} />
    <Route path={`${match.url}/leaves-employee`} component={LeaveEmployee} />
  </Switch>
);

export default EmployeesRoute;
