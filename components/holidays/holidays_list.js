// import Item from "antd/lib/list/Item";
import React, { useState } from "react";
import Edit_holidays from './edit_holidays';


export default function Holidays_list({holiday}) {
  // const [holidayDate, setHolidayDate] = useState("");

  // let NewDate = new Date();
  // console.log("iget date", new Date());

  // let clasees= holidayDate
  // classes= holidayDate>NewDate?"holiday-completed":"holiday-upcoming"

  var [currentId, setCurrentId] = useState('');  
    var [studentObjects, setStudentObjects] = useState({})  

    const [holiday, setHolidays] = useState([]);

    useEffect(() => {
      let db = HolidayDataService.getAll();
      db.on("value", (snapshot) => {
        const arr = [];
        snapshot.forEach(function (childSnapshot) {
          let childData = childSnapshot.val();
          childData.Id = childSnapshot.key;
          arr.push(childData);
        });
        console.log("i got data");
        setHolidays(arr);
      });
    }, []);
  
  
    const addOrEdit = (obj) => {  
        if (currentId === '')  
            firebaseDb.child('holiday').push(  
                obj,  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
        else  
            firebaseDb.child(`holiday/${currentId}`).set(  
                obj,  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
    }  
  

  return (
    <div className="row">
        <Edit_holidays {...({ currentId, studentObjects, addOrEdit })}></Edit_holidays>
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped custom-table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Title </th>
                <th>Holiday Date</th>
                <th>Day</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {holiday.map((item, index) => (
                <tr key={item.Id} className="holiday-completed">
                  <td>{index + 1}</td>
                  <td> {item.HolidayName}</td>
                  <td>{item.HolidayDate}</td>
                  <td>{item.day}</td>
                  <td />
                </tr>
              ))}  */}
              {holiday.map((holiday, index) => (
                <tr key={holiday.Id} className="holiday-upcoming">
                  <td>{index + 1}</td>
                  <td>{holiday.HolidayName}</td>
                  <td>{holiday.HolidayDate}</td>
                  <td>{holiday.day}</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-action">
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
                          data-target="#edit_holiday"
                        >
                          <i className="fa fa-pencil m-r-5"   onClick={() => { setCurrentId(key) }}  /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_holiday"
                        >
                          <i className="fa fa-trash-o m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
