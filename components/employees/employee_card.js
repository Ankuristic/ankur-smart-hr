import React from "react";
import { Avatar_02 } from "../../common/image_path";

export default function Employee_card(props) {
  return (
    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
      <div className="profile-widget">
        <div className="profile-img">
          <a href="/app/profile/employee-profile" className="avatar">
            <img src={Avatar_02} alt="" />
          </a>
        </div>
        <div className="dropdown profile-action">
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
        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
          <a href="/app/profile/employee-profile">
            {" "}
            {props.employee.FirstName} {props.employee.LastName}
          </a>
        </h4>
        <div className="small text-muted">{props.employee.Designation}</div>
      </div>
    </div>
  );
}
