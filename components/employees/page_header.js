import React from 'react'

export default function Page_header() {
    return (
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Employee</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Employee</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_employee"><i className="fa fa-plus" /> Add Employee</a>
              <div className="view-icons">
                <a href="/app/employee/allemployees" className="grid-view btn btn-link active"><i className="fa fa-th" /></a>
                <a href="/app/employee/employees-list" className="list-view btn btn-link"><i className="fa fa-bars" /></a>
              </div>
            </div>
          </div>
        </div>
    )
}
