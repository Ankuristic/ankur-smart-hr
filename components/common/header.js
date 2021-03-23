import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import headerlogo from "../../assets/img/logo.png";

class Header extends Component {
  render() {
    const { location } = this.props;
    let pathname = location.pathname;

    return (
      <div className="header" style={{ right: "0px" }}>
        {/* Logo */}
        <div className="header-left">
          <a href="/app/main/dasboard" className="logo">
            <img src={headerlogo} width={50} height={50} alt="" />
          </a>
        </div>
        {/* /Logo */}
        <a
          id="toggle_btn"
          href=""
          style={{
            display: pathname.includes("tasks")
              ? "none"
              : pathname.includes("compose")
              ? "none"
              : "",
          }}
        >
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        {/* Header Title */}
        <div className="page-title-box">
          <h3> Astutex Technology Solution </h3>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
