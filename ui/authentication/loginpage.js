import React, { useRef, useState } from "react";
// import Helmet from "helmet";
import Applogo from "../../assets/img/logo2.png";
import { useAuth } from "../../context/auth_context";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [success, setSuccess] = useState("");
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setSuccess("");
      await login(emailRef.current.value, passwordRef.current.value);
      setSuccess(alert("loged in successfully"));
    } catch (error) {
      setError(error.message);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div className="main-wrapper">
      {/* <Helmet>
        <title>Login - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet> */}

      {error && alert(error)}
      {success}
      <div className="account-content">
        <a
          href="/orange/applyjob/joblist"
          className="btn btn-primary apply-btn"
        >
          Apply Job
        </a>
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <a href="/orange/app/main/dashboard">
              <img src={Applogo} alt="Dreamguy's Technologies" />
            </a>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
             {/* {currentUser.email} */}
              <form action="/orange/app/main/dashboard" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input className="form-control" type="text" ref={emailRef} />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                    <div className="col-auto">
                      <a className="text-muted" href="/orange/forgotpassword">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    type="password"
                    ref={passwordRef}
                  />
                </div>
                <div className="form-group text-center">
                  <a
                    className="btn btn-primary account-btn"
                    href="/src/ui/organization/employees/all_employees.js"
                  >
                    Login
                  </a>
                   {/* <button type="submit" className="btn btn-primary account-btn"> 
                    Login
                  </button> */}
                </div>
                <div className="account-footer">
                  <p>
                    Don't have an account yet?{" "}
                    <a href="/orange/register">Register</a>
                  </p>
                </div>
              </form>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

