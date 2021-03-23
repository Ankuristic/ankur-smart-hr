/**
 * App Header
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { location } = this.props;
    let pathname = location.pathname;

    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a
                      className={
                        pathname.includes("main/employee-") ? "active" : ""
                      }
                      href="/app/main/employee-dashboard"
                    >
                      Employee Dashboard
                    </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-cube" /> <span> Apps</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/conversation/chat">Chat</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Employees</span>
              </li>
              <li className="submenu">
                <a href="#" className="noti-dot">
                  <i className="la la-user" /> <span> Employees</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a
                      className={
                        pathname.includes("allemployees")
                          ? "active"
                          : pathname.includes("employees-list")
                          ? "active"
                          : ""
                      }
                      href="/app/employee/allemployees"
                    >
                      All Employees
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes("holidays") ? "active" : ""}
                      href="/app/employee/holidays"
                    >
                      Holidays
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes("ves-employee") ? "active" : ""
                      }
                      href="/app/employee/leaves-employee"
                    >
                      Leaves (Employee)
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
