import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Add_employee from "../../components/employees/add_employee";
import Delete_employee from "../../components/employees/delete_employee";
import Edit_employee from "../../components/employees/edit_employee";
import Employee_card from "../../components/employees/employee_card";
import Page_header from "../../components/employees/page_header";
import Search_filter from "../../components/employees/search_filter";
import EmployeeDataService from "./../../services/data_services/employee.data_services";

export default function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let db = EmployeeDataService.getAll();
    db.on("value", (snapshot) => {
      const arr = [];
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        childData.Id = childSnapshot.key;
        arr.push(childData);
      });
      setEmployees(arr);
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Employee - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        <Page_header></Page_header>
        <Search_filter></Search_filter>
        <div className="row staff-grid-row">
          {employees.map((employee) => (
            <Employee_card key={employee.Id} employee={employee} />
          ))}
        </div>
      </div>
      <Add_employee></Add_employee>
      <Edit_employee></Edit_employee>
      <Delete_employee></Delete_employee>
    </div>
  );
}
