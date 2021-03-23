import React from "react";

export default function Page_header() {
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Holidays 2019</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/orange/app/main/dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Holidays</li>
          </ul>
        </div>
        <div className="col-auto float-right ml-auto">
          <a
            href="#"
            className="btn add-btn"
            data-toggle="modal"
            data-target="#add_holiday"
          >
            <i className="fa fa-plus" /> Add Holiday
          </a>
        </div>
      </div>
    </div>
  );
}
