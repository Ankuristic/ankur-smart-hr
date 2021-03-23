import React, { useState } from "react";
import EmployeeDataService from "./../../services/data_services/employee.data_services";

export default function Add_employee() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [employeeId, setemployeeId] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [phone, setphone] = useState("");
  const [department, setdepartment] = useState("");
  const [designation, setdesignation] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "firstName") {
      setfirstName(value);
    } else if (name === "lastName") {
      setlastName(value);
    } else if (name === "userName") {
      setuserName(value);
    } else if (name === "email") {
      setemail(value);
    } else if (name === "password") {
      setpassword(value);
    } else if (name === "confirmPassword") {
      setconfirmPassword(value);
    } else if (name === "employeeId") {
      setemployeeId(value);
    } else if (name === "joiningDate") {
      setjoiningDate(value);
    } else if (name === "phone") {
      setphone(value);
    } else if (name === "department") {
      setdepartment(value);
    } else if (name === "designation") {
      setdesignation(value);
    }
  };

  async function saveEmployee() {
    let data = {
      FirstName: firstName,
      LastName: lastName,
      UserName: userName,
      Email: email,
      Password: password,
      EmployeeID: employeeId,
      Phone: phone,
      JoiningDate: joiningDate,
      Department: department,
      Designation: designation,
    };

    EmployeeDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        newEmployee();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function newEmployee() {
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      employeeId: "",
      joiningDate: "",
      Phone: "",
      Company: "",
      department: "",
      designation: "",
      confirmPassword: "",
    });
  }

  return (
    <div id="add_employee" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Employee</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={async () => {
                await saveEmployee();
              }}
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={firstName}
                      id="firstName"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Last Name</label>
                    <input
                      name="lastName"
                      value={lastName}
                      id="lastName"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input
                      name="userName"
                      value={userName}
                      id="userName"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      name="email"
                      value={email}
                      id="email"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input
                      name="password"
                      value={password}
                      id="password"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Confirm Password</label>
                    <input
                      name="confirmPassword"
                      value={confirmPassword}
                      id="confirmPassword"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input
                      name="employeeId"
                      value={employeeId}
                      id="employeeId"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Joining Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        name="joiningDate"
                        value={joiningDate}
                        id="joiningDate"
                        onChange={(event) => onChangeHandler(event)}
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Phone </label>
                    <input
                      name="phone"
                      value={phone}
                      id="phone"
                      onChange={(event) => onChangeHandler(event)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Department <span className="text-danger">*</span>
                    </label>
                    <select
                      name="department"
                      value={department}
                      id="department"
                      onChange={(event) => onChangeHandler(event)}
                      className="select"
                    >
                      <option>Select Department</option>
                      <option>Web Development</option>
                      <option>IT Management</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Designation <span className="text-danger">*</span>
                    </label>
                    <select
                      name="designation"
                      value={designation}
                      id="designation"
                      onChange={(event) => onChangeHandler(event)}
                      className="select"
                    >
                      <option>Select Designation</option>
                      <option>Web Designer</option>
                      <option>Web Developer</option>
                      <option>Android Developer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="table-responsive m-t-15">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Holidays</td>
                      <td className="text-center">
                        <input defaultChecked type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
