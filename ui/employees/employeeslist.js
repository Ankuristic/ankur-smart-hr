import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { Table } from "antd";
import "antd/dist/antd.css";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/common/pagination";
import "./../../ui/antdstyle.css";
import Add_employee from "../../components/employees/add_employee";
import Delete_employee from "../../components/employees/delete_employee";
import Edit_employee from "../../components/employees/edit_employee";
import Page_header from "../../components/employees/page_header";
import Search_filter from "../../components/employees/search_filter";
import EmployeeDataService from "./../../services/data_services/employee.data_services";

import {
  Avatar_02,
  Avatar_05,
  Avatar_11,
  Avatar_12,
  Avatar_09,
  Avatar_10,
  Avatar_13,
} from "../../common/image_path";

class Employeeslist extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const arr = [];

    let db = EmployeeDataService.getAll();
    db.on("value", (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        childData.Id = childSnapshot.key;
        arr.push(childData);
      });
      this.setState({
        data: arr,
      });
    });
  }

  render() {
    const { data } = this.state;
    const columns = [
      {
        title: "First Name",
        dataIndex: "FirstName",
        render: (text, record) => (
          <h2 className="table-avatar">
            <a href="/app/profile/employee-profile" className="avatar">
              {/* <img alt="" src={record.image} /> */}
            </a>
            <a href="/app/profile/employee-profile">
              {text} <span>{record.role}</span>
            </a>
          </h2>
        ),
        sorter: (a, b) => a.FirstName.length - b.FirstName.length,
      },
      {
        title: "Last Name",
        dataIndex: "LastName",
        render: (text, record) => (
          <h2 className="table-avatar">
            <a href="/app/profile/employee-profile" className="avatar">
              {/* <img alt="" src={record.image} /> */}
            </a>
            <a href="/app/profile/employee-profile">
              {text} <span>{record.role}</span>
            </a>
          </h2>
        ),
        sorter: (a, b) => a.LastName.length - b.LastName.length,
      },
      {
        title: "Employee ID",
        dataIndex: "EmployeeID",
        sorter: (a, b) => a.EmployeeID.length - b.EmployeeID.length,
      },

      {
        title: "Email",
        dataIndex: "Email",
        sorter: (a, b) => a.Email.length - b.Email.length,
      },

      {
        title: "Mobile",
        dataIndex: "Phone",
        sorter: (a, b) => a.Phone.length - b.Phone.length,
      },

      {
        title: "Join Date",
        dataIndex: "JoiningDate",
        sorter: (a, b) => a.JoiningDate.length - b.JoiningDate.length,
      },
      {
        title: "Role",
        dataIndex: "Designation",
        render: (text, record) => (
          <div className="dropdown">
            <a
              href=""
              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Web Developer{" "}
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Software Engineer
              </a>
              <a className="dropdown-item" href="#">
                Software Tester
              </a>
              <a className="dropdown-item" href="#">
                Frontend Developer
              </a>
              <a className="dropdown-item" href="#">
                UI/UX Developer
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action text-right">
            <a
              href="#"
              className="action-icon dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="material-icons">more_vert</i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5" /> Edit
              </a>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5" /> Delete
              </a>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="page-wrapper">
        <Helmet>
          <title>Employeeslist - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          <Page_header></Page_header>
          <Search_filter></Search_filter>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  pagination={{
                    total: data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  // bordered
                  dataSource={data}
                  rowKey={(record) => record.Id}
                  onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        <Add_employee></Add_employee>
        <Edit_employee></Edit_employee>
        <Delete_employee></Delete_employee>
      </div>
    );
  }
}

export default Employeeslist;
