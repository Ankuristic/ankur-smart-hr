import React from "react";

export default function Search_filter() {
  return (
    <div className="row filter-row">
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus">
          <input type="text" className="form-control floating" />
          <label className="focus-label">Employee ID</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus">
          <input type="text" className="form-control floating" />
          <label className="focus-label">Employee Name</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus select-focus">
          <select className="select floating">
            <option>Select Designation</option>
            <option>Web Developer</option>
            <option>Web Designer</option>
            <option>Android Developer</option>
            <option>Ios Developer</option>
          </select>
          {/* <label className="focus-label">Designation</label> */}
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <a href="#" className="btn btn-success btn-block">
          {" "}
          Search{" "}
        </a>
      </div>
    </div>
  );
}
