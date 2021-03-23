import React, { useState } from "react";
import LeaveDataService from "./../../services/data_services/leave.data_service";

export default function Add_leave() {
  const [leaveType, setLeaveType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [numberofDays, setNumberofDays] = useState("");
  const [remainingleaves, setRemainingleaves] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "leaveType") {
      setLeaveType(value);
    } else if (name === "from") {
      setFrom(value);
    } else if (name === "to") {
      setTo(value);
    } else if (name === "numberofDays") {
      setNumberofDays(value);
    } else if (name === "remainingleaves") {
      setRemainingleaves(value);
    } else if (name === "leaveReason") {
      setLeaveReason(value);
    }
  };

  async function saveLeave() {
    let data = {
      LeaveType: leaveType,
      From: from,
      To: to,
      NumberofDays: numberofDays,
      RemainingLeaves: remainingleaves,
      LeavesReason: leaveReason,
    };

    LeaveDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        // newEmployee();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div id="add_leave" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Leave</h5>
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
                await saveLeave();
              }}
            >
              <div className="form-group">
                <label>
                  Leave Type <span className="text-danger">*</span>
                </label>
                <select
                  name="leaveType"
                  value={leaveType}
                  id="leaveType"
                  onChange={(event) => onChangeHandler(event)}
                  className="form-control"
                >
                  <option>Select Leave Type</option>
                  <option>Casual Leave 12 Days</option>
                  <option>Medical Leave</option>
                  <option>Loss of Pay</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  From <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    name="from"
                    value={from}
                    id="from"
                    onChange={(event) => onChangeHandler(event)}
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  To <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    name="to"
                    value={to}
                    id="to"
                    onChange={(event) => onChangeHandler(event)}
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Number of days <span className="text-danger">*</span>
                </label>
                <input
                  name="numberofDays"
                  value={numberofDays}
                  id="numberofDays"
                  onChange={(event) => onChangeHandler(event)}
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="form-group">
                <label>
                  Remaining Leaves <span className="text-danger">*</span>
                </label>
                <input
                  name="remainingleaves"
                  value={remainingleaves}
                  id="remainingleaves"
                  onChange={(event) => onChangeHandler(event)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>
                  Leave Reason <span className="text-danger">*</span>
                </label>
                <input
                  name="leaveReason"
                  value={leaveReason}
                  id="leaveReason"
                  onChange={(event) => onChangeHandler(event)}
                  className="form-control"
                  type="text"
                />
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
