import React, { useRef, useState } from "react";
import HolidayDataService from "./../../services/data_services/holiday.data_service";

export default function Add_holidays(holiday) {
  const [HolidayName, setHolidayName] = useState("");
  const [HolidayDate, setHolidayDate] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "HolidayName") {
      setHolidayName(value);
    } else if (name === "HolidayDate") {
      setHolidayDate(value);
    }
  };

  async function saveHoliday() {
    let data = {
      HolidayName: HolidayName,
      HolidayDate: HolidayDate,
    };

    HolidayDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
    }


  return (
    <div className="modal custom-modal fade" id="add_holiday" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Holiday</h5>
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
                await saveHoliday();
              }}
            >
              <div className="form-group">
                <label>
                  Holiday Name <span className="text-danger">*</span>
                </label>
                <input
                  name="HolidayName"
                  value={HolidayName}
                  id="HolidayName"
                  onChange={(event) => onChangeHandler(event)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>
                  Holiday Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    name="HolidayDate"
                    value={HolidayDate}
                    id="HolidayDate"
                    onChange={(event) => onChangeHandler(event)}
                     type="text"
                  />
                </div>
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
