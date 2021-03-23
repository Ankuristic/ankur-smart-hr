import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Add_holidays from "../../components/holidays/add_holidays";
import Delete_holidays from "../../components/holidays/delete_holidays";
import Edit_holidays from "../../components/holidays/edit_holidays";
import Holidays_list from "../../components/holidays/holidays_list";
import Page_header from "../../components/holidays/page_header";
import HolidayDataService from "./../../services/data_services/holiday.data_service";

export default function Holidays() {
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


  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Holidays - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        <Page_header></Page_header>
        <Holidays_list holiday={holiday} />

        {/* {holiday.map((holiday) => (
          <Holidays_list key={holiday.Id} holiday={holiday} />
       ))} */}

        {/* {holiday.map((holiday) => (
          <td key={holiday.Id} holiday={holiday}/><Holidays_list holiday={holiday} />                                                                                                                                                                                                                                                                                                                                                                                                                                  
       ))}
       */}
      </div>
      <Add_holidays></Add_holidays>
      <Edit_holidays holiday={holiday}></Edit_holidays>
      <Delete_holidays></Delete_holidays>
    </div>
  );
}
