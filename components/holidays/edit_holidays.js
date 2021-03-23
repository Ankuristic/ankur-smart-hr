import React, { useState,useEffect } from "react";
import HolidayDataService from "./../../services/data_services/holiday.data_service";
// import Holidays_list from './holidays_list';


const Edit_holidays= (props) => {  
  const initialFieldValues = {  
      HolidayName: '',  
      HolidayDate: '',  
  }  

  var [values, setValues] = useState(initialFieldValues)  

  useEffect(() => {  
      if (props.currentId === '')  
          setValues({ ...initialFieldValues })  
      else  
          setValues({  
              ...props.studentObjects[props.currentId]  
          })  
  }, [props.currentId, props.studentObjects])  

  const handleInputChange = e => {  
      var { name, value } = e.target;  
      setValues({  
          ...values,  
          [name]: value  
      })  
  }  

  const handleFormSave = e => {  
      e.preventDefault()  
      props.addOrEdit(values);  
  }  
  

  return (
    <div
    className="modal custom-modal fade"
    id="edit_holiday"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Holiday</h5>
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
          <form onChange={handleFormSave}>
            <div className="form-group">
              <label>
                Holiday Name <span className="text-danger">*</span>
              </label>
              <input
              value={values.HolidayName}
                className="form-control"
                onChange={handleInputChange}
                type="text"
                name="HolidayName"
              />
            </div>
            <div className="form-group">
              <label>
                Holiday Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input
                 onChange={handleInputChange}
                  className="form-control datetimepicker"
                  value={values.HolidayDate}
                  type="text"
                  name="HolidayDate"
                />
              </div>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
  }

  export default Edit_holidays;  