import React from "react";

function Page_header() {
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Leaves</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/orange/app/main/dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Leaves</li>
          </ul>
        </div>
        <div className="col-auto float-right ml-auto">
          <a
            href="#"
            className="btn add-btn"
            data-toggle="modal"
            data-target="#add_leave"
          >
            <i className="fa fa-plus" /> Add Leave
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page_header;
