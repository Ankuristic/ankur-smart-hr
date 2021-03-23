import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Avatar_09 } from "../../common/image_path";

import { Table } from "antd";
import "antd/dist/antd.css";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/common/pagination";
import "./../../ui/antdstyle.css";
import Add_leave from "../../components/leave/add_leave";
import Delete_leave from "../../components/leave/delete_leave";
import Edit_leave from "../../components/leave/edit_leave";
import Page_header from "../../components/leave/page_header";
import Leave_statics from "../../components/leave/leave_statics";
import LeaveDataService from "./../../services/data_services/leave.data_service";
class Leaves extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const arr = [];

    let db = LeaveDataService.getAll();
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
        title: "Leave Type",
        dataIndex: "LeaveType",
        sorter: (a, b) => a.LeaveType.length - b.LeaveType.length,
      },

      {
        title: "From",
        dataIndex: "From",
        sorter: (a, b) => a.From.length - b.From.length,
      },
      {
        title: "To",
        dataIndex: "to",
        sorter: (a, b) => a.to.length - b.to.length,
      },

      {
        title: "No Of Days",
        dataIndex: "NumberofDays",
        sorter: (a, b) => a.NumberofDays.length - b.NumberofDays.length,
      },

      {
        title: "Reason",
        dataIndex: "LeavesReason",
        sorter: (a, b) => a.LeavesReason.length - b.LeavesReason.length,
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (text, record) => (
          <div className="action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded" href="">
              <i
                className={
                  text === "New"
                    ? "fa fa-dot-circle-o text-purple"
                    : text === "Pending"
                    ? "fa fa-dot-circle-o text-info"
                    : text === "Approved"
                    ? "fa fa-dot-circle-o text-success"
                    : "fa fa-dot-circle-o text-danger"
                }
              />{" "}
              {text}
            </a>
          </div>
        ),
      },
      {
        title: "Approved By",
        dataIndex: "name",
        render: (text, record) => (
          <h2 className="table-avatar">
            <a href="/app/profile/employee-profile" className="avatar">
              <img alt="" src={record.image} />
            </a>
            <a href="/app/profile/employee-profile">{text} </a>
          </h2>
        ),
        sorter: (a, b) => a.name.length - b.name.length,
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
                data-target="#edit_leave"
              >
                <i className="fa fa-pencil m-r-5" /> Edit
              </a>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_approve"
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
          <title>Leaves - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          <Page_header></Page_header>
          <Leave_statics></Leave_statics>
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
                  rowKey={(record) => record.id}
                  onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        <Add_leave></Add_leave>
        <Delete_leave></Delete_leave>
        <Edit_leave></Edit_leave>
      </div>
    );
  }
}

export default Leaves;
